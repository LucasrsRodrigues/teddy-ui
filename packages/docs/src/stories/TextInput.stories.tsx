import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@teddy-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
          <Text size="sm" >E-mail address</Text>
          {Story()}
        </Box>
      )
    }
  ],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: "inline-radio"
      }
    },
  }
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name"
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}


