'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import {
  type SubscribeFormData,
  subscribeFormValidation,
} from '@/validations/subscribe-form-validation'

export const SubscriptionForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(subscribeFormValidation),
  })

  const onSubscribe = ({ name, email }: SubscribeFormData) => {
    console.log({ name, email })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <p className="font-semibold text-danger text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="font-semibold text-danger text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
