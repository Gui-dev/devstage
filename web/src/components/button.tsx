import type { ComponentProps, ReactNode } from 'react'

interface IButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <button
      className="flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-gray-500 px-4 font-semibold text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...rest}
    >
      {children}
    </button>
  )
}
