import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <ArrowRight />
      </IconButton>

      <InputRoot>
        <InputIcon>
          <Mail />
        </InputIcon>
        <InputField type="email" placeholder="Digite seu e-mail" />
      </InputRoot>
    </main>
  )
}
