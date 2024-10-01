import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$black',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        '@media (min-width: 640px)': { fontSize: '$md' }, // Telas médias
        '@media (min-width: 1024px)': { fontSize: '$lg' }, // Telas grandes
        '@media (min-width: 1440px)': { fontSize: '$xl' }, // Telas extra grandes
      },
      md: {
        fontSize: '$md',
        '@media (min-width: 640px)': { fontSize: '$lg' },
        '@media (min-width: 1024px)': { fontSize: '$xl' },
        '@media (min-width: 1440px)': { fontSize: '$2xl' },
      },
      lg: {
        fontSize: '$lg',
        '@media (min-width: 640px)': { fontSize: '$xl' },
        '@media (min-width: 1024px)': { fontSize: '$2xl' },
        '@media (min-width: 1440px)': { fontSize: '$3xl' },
      },
      '2xl': {
        fontSize: '$xl',
        '@media (min-width: 640px)': { fontSize: '$2xl' },
        '@media (min-width: 1024px)': { fontSize: '$3xl' },
        '@media (min-width: 1440px)': { fontSize: '$4xl' },
      },
      '3xl': {
        fontSize: '$2xl',
        '@media (min-width: 640px)': { fontSize: '$3xl' },
        '@media (min-width: 1024px)': { fontSize: '$4xl' },
        '@media (min-width: 1440px)': { fontSize: '$5xl' },
      },
      '4xl': {
        fontSize: '$3xl',
        '@media (min-width: 640px)': { fontSize: '$4xl' },
        '@media (min-width: 1024px)': { fontSize: '$5xl' },
        '@media (min-width: 1440px)': { fontSize: '$6xl' },
      },
      '5xl': {
        fontSize: '$4xl',
        '@media (min-width: 640px)': { fontSize: '$5xl' },
        '@media (min-width: 1024px)': { fontSize: '$6xl' },
        '@media (min-width: 1440px)': { fontSize: '$7xl' },
      },
      '6xl': {
        fontSize: '$5xl',
        '@media (min-width: 640px)': { fontSize: '$6xl' },
        '@media (min-width: 1024px)': { fontSize: '$7xl' },
        '@media (min-width: 1440px)': { fontSize: '$8xl' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
