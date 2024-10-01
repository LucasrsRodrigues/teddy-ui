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
        fontSize: '$xl',
        '@media (min-width: 640px)': { fontSize: '$2xl' }, // a partir de 640px, aumenta o tamanho
      },
      md: {
        fontSize: '$2xl',
        '@media (min-width: 640px)': { fontSize: '$4xl' },
        '@media (min-width: 1024px)': { fontSize: '$5xl' }, // maior ainda em telas maiores
      },
      lg: {
        fontSize: '$4xl',
        '@media (min-width: 640px)': { fontSize: '$5xl' },
        '@media (min-width: 1024px)': { fontSize: '$6xl' },
      },
      '2xl': {
        fontSize: '$5xl',
        '@media (min-width: 640px)': { fontSize: '$6xl' },
        '@media (min-width: 1024px)': { fontSize: '$7xl' },
      },
      '3xl': {
        fontSize: '$6xl',
        '@media (min-width: 640px)': { fontSize: '$7xl' },
        '@media (min-width: 1024px)': { fontSize: '$8xl' },
      },
      '4xl': {
        fontSize: '$7xl',
        '@media (min-width: 640px)': { fontSize: '$8xl' },
        '@media (min-width: 1024px)': { fontSize: '$9xl' },
      },
      '5xl': {
        fontSize: '$8xl',
        '@media (min-width: 640px)': { fontSize: '$9xl' },
      },
      '6xl': {
        fontSize: '$9xl',
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
