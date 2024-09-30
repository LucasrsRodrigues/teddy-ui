import { styled } from '../../styles'

export const PaginationContainer = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
})

export const PaginationItem = styled('button', {
  backgroundColor: 'transparent',
  padding: '$2 $3',
  border: 0,
  borderRadius: '$sm',
  color: '$black',
  fontWeight: '$bold',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'default',
  },

  variants: {
    active: {
      true: {
        background: '$orange',
        color: '$white',
      },
    },
  },
})
