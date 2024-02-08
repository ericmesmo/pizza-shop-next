'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignUpSchema, signUpSchema } from '@/types/sign-up'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

export default function SignUpForm() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  async function handleSignIn({
    email,
    managerName,
    phone,
    restaurantName,
  }: SignUpSchema) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: 'Restaurante cadastrado com sucesso!',
        variant: 'default',
      })
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
        <Input
          id="restaurantName"
          type="text"
          {...register('restaurantName')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="managerName">Seu nome</Label>
        <Input id="managerName" type="text" {...register('managerName')} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Seu celular</Label>
        <Input id="phone" type="tel" {...register('phone')} />
      </div>

      <Button
        type="submit"
        aria-disabled={isSubmitting}
        className="w-full aria-disabled:cursor-not-allowed"
      >
        Acessar painel
      </Button>

      <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
        Ao continuar você concorda com nossos{' '}
        <a className="underline underline-offset-4 hover:cursor-pointer">
          termos de serviço
        </a>{' '}
        e{' '}
        <a className="underline underline-offset-4 hover:cursor-pointer">
          políticas de privacidade
        </a>
        .
      </p>
    </form>
  )
}
