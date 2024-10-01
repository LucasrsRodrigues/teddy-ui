import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$black',

  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
        '@media (max-width: 1440px)': { fontSize: '$xxs' }, // valor mais alto nas telas maiores
        '@media (max-width: 1024px)': { fontSize: '$xxs' },
        '@media (max-width: 640px)': { fontSize: '$xxs' },
      },
      xs: {
        fontSize: '$xs',
        '@media (max-width: 1440px)': { fontSize: '$xs' },
        '@media (max-width: 1024px)': { fontSize: '$xs' },
        '@media (max-width: 640px)': { fontSize: '$xxs' },
      },
      sm: {
        fontSize: '$sm',
        '@media (max-width: 1440px)': { fontSize: '$sm' },
        '@media (max-width: 1024px)': { fontSize: '$xs' },
        '@media (max-width: 640px)': { fontSize: '$xxs' },
      },
      md: {
        fontSize: '$md',
        '@media (max-width: 1440px)': { fontSize: '$md' },
        '@media (max-width: 1024px)': { fontSize: '$sm' },
        '@media (max-width: 640px)': { fontSize: '$xs' },
      },
      lg: {
        fontSize: '$lg',
        '@media (max-width: 1440px)': { fontSize: '$lg' },
        '@media (max-width: 1024px)': { fontSize: '$md' },
        '@media (max-width: 640px)': { fontSize: '$sm' },
      },
      xl: {
        fontSize: '$xl',
        '@media (max-width: 1440px)': { fontSize: '$xl' },
        '@media (max-width: 1024px)': { fontSize: '$lg' },
        '@media (max-width: 640px)': { fontSize: '$md' },
      },
      '2xl': {
        fontSize: '$2xl',
        '@media (max-width: 1440px)': { fontSize: '$2xl' },
        '@media (max-width: 1024px)': { fontSize: '$xl' },
        '@media (max-width: 640px)': { fontSize: '$lg' },
      },
      '4xl': {
        fontSize: '$4xl',
        '@media (max-width: 1440px)': { fontSize: '$4xl' },
        '@media (max-width: 1024px)': { fontSize: '$2xl' },
        '@media (max-width: 640px)': { fontSize: '$xl' },
      },
      '5xl': {
        fontSize: '$5xl',
        '@media (max-width: 1440px)': { fontSize: '$5xl' },
        '@media (max-width: 1024px)': { fontSize: '$4xl' },
        '@media (max-width: 640px)': { fontSize: '$2xl' },
      },
      '6xl': {
        fontSize: '$6xl',
        '@media (max-width: 1440px)': { fontSize: '$6xl' },
        '@media (max-width: 1024px)': { fontSize: '$5xl' },
        '@media (max-width: 640px)': { fontSize: '$4xl' },
      },
      '7xl': {
        fontSize: '$7xl',
        '@media (max-width: 1440px)': { fontSize: '$7xl' },
        '@media (max-width: 1024px)': { fontSize: '$6xl' },
        '@media (max-width: 640px)': { fontSize: '$5xl' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
