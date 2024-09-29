import type { StoryObj, Meta } from "@storybook/react";
import { Box, Heading, HeadingProps } from "@teddy-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    children: 'Custom Title',
    size: "md",
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ],
      control: {
        type: "inline-radio"
      }
    },
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}

