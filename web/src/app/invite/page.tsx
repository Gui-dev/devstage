import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { InviteLinkInput } from '../components/invite-link-input'
import { Ranking } from '../components/ranking'
import { Stats } from '../components/stats'

const InvitePage = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <Image src={logo} alt="Devstage Logo" height={30} width={108.5} />
        <div className="space-y-2">
          <h1 className="font-heading font-semibold text-4xl text-gray-100 leading-none">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link e acompanhar as inscrições:
            </p>
          </div>

          <InviteLinkInput />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  )
}

export default InvitePage
