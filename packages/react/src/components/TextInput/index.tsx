import { ComponentProps, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  className?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer className={className}>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
