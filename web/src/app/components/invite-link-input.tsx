'use client'

import { Copy, Link } from 'lucide-react'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'

interface IInviteLinkInputProps {
  inviteLink: string
}

export const InviteLinkInput = ({ inviteLink }: IInviteLinkInputProps) => {
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton type="button" className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
