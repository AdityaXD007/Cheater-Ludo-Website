import * as z from 'zod'

export const AdminLoginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
})

export type AdminLoginSchemaType = z.infer<typeof AdminLoginSchema>
