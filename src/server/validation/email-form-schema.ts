import { z } from "zod";

const emailFormSchema = z.object({
  ename: z.string().min(1, {
    message: "Employee name must be of 1 character.",
  }),
  dateOfJoining: z.date(),
  department: z.enum(["FF&A", "MEDICAL BILLING", "HR", "IT"]),
  managerName: z
    .string()
    .min(1, { message: "Manager name must be of 1 character" }),
  managerEmail: z.enum([
    "am@qualicentric.com",
    "ga@qualicentric.com",
    "lovkesh@qualicentric.com",
  ]),
});

export default emailFormSchema;
