'use server'

import { LoginSchema } from '../types/sign-in'

export async function handleSignIn({ email }: LoginSchema) {
  if (email !== 'oliveiraericm@gmail.com') return 'error'

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return 'success'
}
