import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextProps } from "@teddy-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
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
    size: "md",
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem saepe sapiente, ea dignissimos dolores, neque distinctio consequatur sequi explicabo enim non repellendus veritatis labore, sint sunt ratione voluptas laborum!'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: "inline-radio"
      }
    },
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}



