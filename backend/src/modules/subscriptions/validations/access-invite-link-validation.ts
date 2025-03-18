import z from 'zod'

export const accessInviteLinkValidation = z.object({
  subscriber_id: z.string().uuid(),
})

export const accessInviteLinkResponse = z.null()
