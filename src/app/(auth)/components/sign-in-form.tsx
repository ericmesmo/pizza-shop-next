'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignInSchema, signInSchema } from '@/app/types/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

export default function SignInForm() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn({ email }: SignInSchema) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: 'Enviamos um link de autenticação para o seu e-mail',
        description: 'Verifique sua caixa de e-mails',
        variant: 'default',
      })
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>
      <Button
        type="submit"
        aria-disabled={isSubmitting}
        className="w-full aria-disabled:cursor-not-allowed"
      >
        Acessar painel
      </Button>
    </form>
  )
}
