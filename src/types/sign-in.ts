import { z } from 'zod'

export const signInBody = z.object({
  email: z.string().email(),
})

export type SignInBody = z.infer<typeof signInBody>
