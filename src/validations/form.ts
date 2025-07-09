import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters long." }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z
    .number({ message: "Enter a valid phone number" })
    .refine(
      (value) => value >= 1000000000 && value <= 9999999999,
      "The entered number is invalid",
    ),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

type FormSchema = z.infer<typeof formSchema>;

export { formSchema };
export type { FormSchema };
