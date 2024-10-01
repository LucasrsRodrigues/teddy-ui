import { ComponentProps, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  className?: string
  hasError?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, hasError = false, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer className={className} error={hasError}>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
