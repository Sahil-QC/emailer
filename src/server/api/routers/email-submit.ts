import emailFormSchema from "~/server/validation/email-form-schema";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import sendMail from "~/server/helper/mail";
import { emailTemplate } from "~/server/utils";
import { z } from "zod";

const emailRouter = createTRPCRouter({
  sendMail: publicProcedure
    .input(
      emailFormSchema.extend({ receiversEmails: z.string().email().array() }),
    )
    .mutation(async ({ input }) => {
      const { ename, dateOfJoining, managerName, department, receiversEmails } =
        input;

      try {
        const content = emailTemplate
          .replace("[ename]", ename)
          .replace("[dateOfJoining]", dateOfJoining.toLocaleDateString())
          .replace("[managerName]", managerName)
          .replace("[department]", department);

        for (const item of receiversEmails) {
          await sendMail({
            receiverEmail: item,
            mailSubject: "",
            content: content,
          });

          console.log("email sent to: ", item);
        }

        return {
          message: "Mail sent successfully",
        };
      } catch (err) {
        console.log(err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email",
        });
      }
    }),
});

export default emailRouter;
