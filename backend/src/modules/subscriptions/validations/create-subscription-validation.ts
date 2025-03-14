import z from 'zod'

export const createSubscriptionValidation = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
})

export const createSubscriptionResponse = z.object({
  subscriber_id: z.string().uuid(),
})
