import styled from "styled-components";
import { darken } from "polished";

import {
  color,
  space,
  layout,
  typography,
  variant,
  compose,
} from "styled-system";

import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  outline: none;
  text-align: center;
  padding: 0.5em 1em;
  font-weight: 400;
  letter-spacing: 0.2px;
  font-size: 1rem;
  border: 2px solid transparent;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  opacity: ${({ disabled }) => disabled && ".5"};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};

  ${compose(space, layout, typography, color)};

  ${variant({
    prop: "size",
    variants: {
      small: {
        fontSize: 12,
      },

      medium: {
        fontSize: 16,
      },

      large: {
        fontSize: 20,
      },
    },
  })}

  ${({ theme }) =>
    variant({
      variants: {
        contained: {
          color: theme.text.secondery,
          backgroundColor: theme.colors.primary,
          borderRadius: "3px",
          transition: "all .3s linear",
          borderColor: theme.colors.primary,

          "&:hover": {
            backgroundColor: darken(0.1, theme.colors.primary),
            borderColor: darken(0.1, theme.colors.primary),
          },

          "&:active": {
            backgroundColor: darken(0.15, theme.colors.primary),
            borderColor: darken(0.15, theme.colors.primary),
          },

          "&:focus-visible": {
            borderColor: theme.colors.focus,
          },
        },

        outlined: {
          color: theme.colors.primary,
          backgroundColor: "transparent",
          borderRadius: "1px",
          transition: "all .3s linear",
          borderColor: theme.colors.primary,
          "&:hover": {
            backgroundColor: theme.colors.primary,
            color: theme.text.secondery,
          },

          "&:active": {
            backgroundColor: darken(0.1, theme.colors.primary),
          },

          "&:focus-visible": {
            borderColor: theme.colors.focus,
          },
        },
      },
    })}
`;

Button.defaultProps = {
  variant: "outlined",
  size: "medium",
};
