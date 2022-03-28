import { ButtonHTMLAttributes } from "react";
import { ThemeProps } from "../../theme";

type ButtonVariants = "contained" | "outlined";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends ThemeProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: ButtonVariants;
  size?: ButtonSize;
}
