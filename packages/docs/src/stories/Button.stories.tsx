import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@teddy-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: "inline-radio"
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: "inline-radio"
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}


