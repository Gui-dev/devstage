import { getRanking } from '@/http/api'
import Image from 'next/image'

import cooperMedal from '@/assets/medal-cooper.svg'
import goldMedal from '@/assets/medal-gold.svg'
import silverMedal from '@/assets/medal-silver.svg'

export const Ranking = async () => {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de inscrições
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
            >
              <span className="text-gray-300 text-sm leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={goldMedal}
                  alt="Gold medal image"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={silverMedal}
                  alt="Gold medal image"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={cooperMedal}
                  alt="Gold medal image"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
