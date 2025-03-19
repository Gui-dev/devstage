import z from 'zod'

export const getSubscriberRankingPositionValidation = z.object({
  subscriber_id: z.string().uuid(),
})

export const getSubscriberRankingPositionResponse = z.object({
  position: z.number().nullable(),
})
