import type { ComponentProps } from 'react'

interface IInputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export const InputRoot = ({ error, ...rest }: IInputRootProps) => {
  return (
    <div
      data-error={error}
      className="group flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...rest}
    />
  )
}

interface IInputIconProps extends ComponentProps<'span'> {}

export const InputIcon = (props: IInputIconProps) => {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface IInputFieldProps extends ComponentProps<'input'> {}

export const InputField = (props: IInputFieldProps) => {
  return <input className="flex-1 placeholder-gray-400 outline-0" {...props} />
}
