import emailFormSchema from "~/server/validation/email-form-schema";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import sendMail from "~/server/helper/mail";
import {
  emailTemplate,
  hrEmailTemplate,
  managerEmailTemplate,
  itEmailTemplate, // Add this import
} from "~/server/utils";
import { z } from "zod";

const emailRouter = createTRPCRouter({
  sendMail: publicProcedure
    .input(
      emailFormSchema.extend({
        receiversEmails: z.string().email().array(),
      }),
    )
    .mutation(async ({ input }) => {
      const {
        ename,
        dateOfJoining,
        managerName,
        department,
        receiversEmails,
        managerEmail,
      } = input;

      try {
        const content = emailTemplate
          .replace("[ename]", ename)
          .replace("[dateOfJoining]", dateOfJoining.toLocaleDateString())
          .replace("[managerName]", managerName)
          .replace("[department]", department)
          .replace("[Company Name]", "Qualicentric");

        const hrContent = hrEmailTemplate
          .replace("{{ename}}", ename)
          .replace("{{dateOfJoining}}", dateOfJoining.toLocaleDateString())
          .replace("{{department}}", department)
          .replace("{{hrRepresentativeName}}", "HR Team");

        const managerContent = managerEmailTemplate
          .replace("[Employee's Full Name]", ename)
          .replace("[Department Name]", department)
          .replace("[Joining Date]", dateOfJoining.toLocaleDateString())
          .replace("[managerName]", managerName);

        const itContent = itEmailTemplate
          .replace("{{ename}}", ename)
          .replace("{{dateOfJoining}}", dateOfJoining.toLocaleDateString())
          .replace("{{department}}", department)
          .replace("{{position}}", "New Employee")
          .replace(
            "{{emailAddress}}",
            `${ename.toLowerCase().replace(/\s+/g, ".")}@qualicentric.com`,
          )
          .replace("{{itSupportName}}", "IT Support Team")
          .replace(
            "{{setupCompletionDate}}",
            new Date(
              dateOfJoining.getTime() + 5 * 24 * 60 * 60 * 1000,
            ).toLocaleDateString(),
          ) // 5 days after joining
          .replace("{{senderName}}", "HR Department")
          .replace("{{senderPosition}}", "Human Resources");

        console.log(input);
        console.log(content);
        console.log(managerContent);
        console.log(itContent);
        console.log(hrContent);
        return;

        // Send emails to receivers
        for (const receiverEmail of receiversEmails) {
          const isHrEmail = receiverEmail.toLowerCase().includes("hr");
          const isItEmail =
            receiverEmail.toLowerCase().includes("it") ||
            receiverEmail.toLowerCase().includes("atul");

          let mailSubject = "Welcome to Qualicentric";
          let emailContent = content;

          if (isHrEmail) {
            mailSubject = "New Employee Onboarding Request";
            emailContent = hrContent;
          } else if (isItEmail) {
            mailSubject = "New Employee IT Onboarding Preparation";
            emailContent = itContent;
          }

          await sendMail({
            receiverEmail,
            mailSubject,
            content: emailContent,
          });
        }

        // Send manager notification
        await sendMail({
          receiverEmail: managerEmail,
          mailSubject: "New Team Member Joining",
          content: managerContent,
        });

        return {
          message: "Emails sent successfully",
        };
      } catch (err) {
        console.error(err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send emails",
        });
      }
    }),
});

export default emailRouter;
