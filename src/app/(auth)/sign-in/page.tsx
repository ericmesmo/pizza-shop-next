import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import SignInForm from '../components/sign-in-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default async function SignIn() {
  return (
    <div className="p-8">
      <Button asChild className="absolute right-8 top-8" variant="ghost">
        <Link href="/sign-up">Novo estabelecimento</Link>
      </Button>

      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas no painel
          </p>
        </div>

        <SignInForm />
      </div>
    </div>
  )
}
