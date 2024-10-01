import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

const BoxStyled = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$white',
})

export interface BoxProps extends ComponentProps<typeof BoxStyled> {
  as?: ElementType
  children: React.ReactNode
  className?: string
}

export const Box = ({ className, children, ...props }: BoxProps) => {
  return (
    <BoxStyled className={className} {...props}>
      {children}
    </BoxStyled>
  )
}

Box.displayName = 'Box'
