import { z } from 'zod'

export const signUpSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
