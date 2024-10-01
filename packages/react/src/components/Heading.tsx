import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

const HeadingComponent = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$black',

  variants: {
    size: {
      sm: {
        fontSize: '$xl', // valor para até 1440px
        '@media (max-width: 1024px)': { fontSize: '$lg' }, // em telas menores (1024px) diminui
        '@media (max-width: 640px)': { fontSize: '$md' }, // em telas pequenas (640px) diminui mais
      },
      md: {
        fontSize: '$2xl',
        '@media (max-width: 1024px)': { fontSize: '$xl' },
        '@media (max-width: 640px)': { fontSize: '$lg' },
      },
      lg: {
        fontSize: '$4xl',
        '@media (max-width: 1024px)': { fontSize: '$2xl' },
        '@media (max-width: 640px)': { fontSize: '$xl' },
      },
      '2xl': {
        fontSize: '$5xl',
        '@media (max-width: 1024px)': { fontSize: '$4xl' },
        '@media (max-width: 640px)': { fontSize: '$2xl' },
      },
      '3xl': {
        fontSize: '$6xl',
        '@media (max-width: 1024px)': { fontSize: '$5xl' },
        '@media (max-width: 640px)': { fontSize: '$4xl' },
      },
      '4xl': {
        fontSize: '$7xl',
        '@media (max-width: 1024px)': { fontSize: '$6xl' },
        '@media (max-width: 640px)': { fontSize: '$5xl' },
      },
      '5xl': {
        fontSize: '$8xl',
        '@media (max-width: 1024px)': { fontSize: '$7xl' },
        '@media (max-width: 640px)': { fontSize: '$6xl' },
      },
      '6xl': {
        fontSize: '$9xl',
        '@media (max-width: 1024px)': { fontSize: '$8xl' },
        '@media (max-width: 640px)': { fontSize: '$7xl' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof HeadingComponent> {
  as?: ElementType
  children: string
  className?: string
}

export const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <HeadingComponent className={className} {...props}>
      {children}
    </HeadingComponent>
  )
}

Heading.displayName = 'Heading'
