import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <div className="text-4xl text-gray-100">Hello world!</div>
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <ArrowRight />
      </IconButton>
    </main>
  )
}
