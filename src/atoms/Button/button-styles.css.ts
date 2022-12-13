import { style } from '@vanilla-extract/css'

export const baseButtonStyles = style({
  border: 'none',
  ':focus': {
    outline: 'none',
  },
})
