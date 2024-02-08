'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { SignInBody, signInBody } from '@/types/sign-in'

export default function SignInForm() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInBody>({
    resolver: zodResolver(signInBody),
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn({ email }: SignInBody) {
    try {
      await authenticate({ email })

      toast({
        title: 'Enviamos um link de autenticação para o seu e-mail',
        description: 'Verifique sua caixa de e-mails',
        variant: 'default',
      })
    } catch (error) {
      toast({
        title: 'Algo deu errado',
        description: 'Por favor, tente novamente',
      })
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
