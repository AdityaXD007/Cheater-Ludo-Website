import * as z from 'zod'
export const ContactFormSchema = z.object({
  fullName: z
    .string('Invalid Name')
    .trim()
    .min(4, 'Name must be at least 4 characters long')
    .max(50, 'Name must be less than 50 characters'),
  email: z.email('Invalid email'),
  phoneNumber: z
    .string('Invalid Phone Number')
    .trim()
    .min(10, 'Phone Number must be at least 10 digits long')
    .max(15, 'Phone Number must be less than 15 digits long'),
  message: z
    .string('Invalid Message')
    .trim()
    .min(1, 'Message is required')
    .max(500, 'Message must be less than 500 characters'),
})

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>
