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
        '@media (min-width: 640px)': { fontSize: '$xs' }, // Ajusta em telas maiores
      },
      xs: {
        fontSize: '$xs',
        '@media (min-width: 640px)': { fontSize: '$sm' },
        '@media (min-width: 1024px)': { fontSize: '$md' }, // Ainda maior em desktops
      },
      sm: {
        fontSize: '$sm',
        '@media (min-width: 640px)': { fontSize: '$md' },
        '@media (min-width: 1024px)': { fontSize: '$lg' },
      },
      md: {
        fontSize: '$md',
        '@media (min-width: 640px)': { fontSize: '$lg' },
        '@media (min-width: 1024px)': { fontSize: '$xl' },
      },
      lg: {
        fontSize: '$lg',
        '@media (min-width: 640px)': { fontSize: '$xl' },
        '@media (min-width: 1024px)': { fontSize: '$2xl' },
      },
      xl: {
        fontSize: '$xl',
        '@media (min-width: 640px)': { fontSize: '$2xl' },
        '@media (min-width: 1024px)': { fontSize: '$4xl' },
      },
      '2xl': {
        fontSize: '$2xl',
        '@media (min-width: 640px)': { fontSize: '$4xl' },
        '@media (min-width: 1024px)': { fontSize: '$5xl' },
      },
      '4xl': {
        fontSize: '$4xl',
        '@media (min-width: 640px)': { fontSize: '$5xl' },
        '@media (min-width: 1024px)': { fontSize: '$6xl' },
      },
      '5xl': {
        fontSize: '$5xl',
        '@media (min-width: 640px)': { fontSize: '$6xl' },
        '@media (min-width: 1024px)': { fontSize: '$7xl' },
      },
      '6xl': {
        fontSize: '$6xl',
        '@media (min-width: 640px)': { fontSize: '$7xl' },
        '@media (min-width: 1024px)': { fontSize: '$8xl' },
      },
      '7xl': {
        fontSize: '$7xl',
        '@media (min-width: 640px)': { fontSize: '$8xl' },
      },
      '8xl': {
        fontSize: '$8xl',
        '@media (min-width: 640px)': { fontSize: '$9xl' },
      },
      '9xl': {
        fontSize: '$9xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
  className?: string
}

Text.displayName = 'Text'
