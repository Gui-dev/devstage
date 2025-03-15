import z from 'zod'

export const getSubscriberInviteClicksValidation = z.object({
  subscriber_id: z.string().uuid(),
})

export const getSubscriberInviteClicksResponse = z.object({
  count: z.number(),
})
