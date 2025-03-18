import z from 'zod'

export const getSubscriberInvitesCountValidation = z.object({
  subscriber_id: z.string().uuid(),
})

export const getSubscriberInvitesCountResponse = z.object({
  count: z.number(),
})
