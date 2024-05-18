import { createElement } from "@tiger-ui/react";

import Ripple from "../Ripple";

interface ButtonProps {
  variant?: 'contained' | 'outlined',
}

const Button = createElement('button')<ButtonProps>({
  style: ({ theme: { transitions } }) => ({
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    padding: '0.6rem 1.8rem',
    fontSize: '15px',
    fontWeight: 600,
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
    outline: 'none',
    transition: `all ${transitions.duration.fast}`,
    ':hover': {
      opacity: '0.7',
    },
  }),
  props: {
    variant: {
      contained: ({ theme }) => ({
        color: '#000000',
        backgroundColor: theme.colors.base.primary.main,
      }),
      outlined: ({ theme }) => ({
        color: theme.colors.base.primary.main,
        border: `1px solid ${theme.colors.base.primary.main}`,
        backgroundColor: 'transparent',
      }),
    },
  },
  defaults: {
    custom: {
      variant: 'contained',
    },
  },
  Children: ({ children, variant, theme: { colors } }) => {
    return (
      <>
        {children}
        <Ripple color={variant === 'outlined' ? colors.base.primary.main : '#ffffff' } />
      </>
    )
  },
});

export default Button;