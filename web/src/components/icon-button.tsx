import type { ComponentProps, ReactNode } from 'react'

interface IIconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export const IconButton = ({ children, ...rest }: IIconButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded-md bg-gray-500 p-1.5 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...rest}
    >
      {children}
    </button>
  )
}
