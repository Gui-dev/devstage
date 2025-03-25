import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IIconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export const IconButton = ({
  children,
  className,
  ...rest
}: IIconButtonProps) => {
  return (
    <button
      className={twMerge(
        'cursor-pointer rounded-md bg-gray-500 p-1.5 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
