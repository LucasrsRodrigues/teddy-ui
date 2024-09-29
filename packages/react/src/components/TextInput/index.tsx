import { ComponentProps } from "react";
import { Input, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> { }

export function TextInput({ ...rest }: TextInputProps) {
  return (
    <TextInputContainer>
      <Input  {...rest} />
    </TextInputContainer>
  )
}

TextInput.displayName = "TextInput";
