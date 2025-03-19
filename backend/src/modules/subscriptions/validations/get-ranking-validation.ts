import z from 'zod'

export const getRankingValidationResponse = z.object({
  ranking: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string(),
      score: z.number(),
    })
  ),
})
