import { ComponentProps, ReactElement } from 'react'
import { styled } from '../styles'

const ButtonComponent = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  width: '100%',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$granit',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$orange',

        '&:not(:disabled):hover': {
          background: '$orangeLight',
        },

        '&:disabled': {
          backgroundColor: '$granit',
          cursor: 'not-allowed',
        },
      },

      secondary: {
        color: '$orange',
        border: '2px solid $orange',

        '&:not(:disabled):hover': {
          background: '$orange',
          color: '$white',
        },

        '&:disabled': {
          color: '$granit',
          borderCollapse: '$granit',
        },
      },
    },

    size: {
      sm: {
        padding: '0 $4',
        height: 35,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof ButtonComponent> {
  as?: ReactElement
}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <ButtonComponent className={className} {...props}>
      {props?.children}
    </ButtonComponent>
  )
}

Button.displayName = 'Button'
