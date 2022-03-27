import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
export const defaultTheme = {
  breakpoints: ["450px", "600px", "960px", "1280px", "1440px", "1920px"],

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },

  space: {
    xxs: "0.6rem",
    xs: "0.8rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  colors: {
    white: "#fff",
    black: "#000",
  },
};

export type AppTheme = typeof defaultTheme;

export type ThemeProps = ColorProps<AppTheme> &
  LayoutProps<AppTheme> &
  SpaceProps<AppTheme> &
  TypographyProps<AppTheme>;
