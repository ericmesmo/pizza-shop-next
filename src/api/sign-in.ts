import { api } from '@/lib/axios'
import { SignInBody } from '@/types/sign-in'

export async function signIn({ email }: SignInBody) {
  return await api.post('/authenticate', { email })
}
