import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, User } from 'lucide-react'

export const SubscriptionForm = () => {
  return (
    <form className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="E-mail" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
