import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

const BoxStyled = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$white',
})

export interface BoxProps extends ComponentProps<typeof BoxStyled> {
  as?: ElementType
}

export const Box = ({ className, ...props }: BoxProps) => {
  return (
    <BoxStyled className={className} {...props}>
      {props?.children}
    </BoxStyled>
  )
}

Box.displayName = 'Box'
