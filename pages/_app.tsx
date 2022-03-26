import React from "react";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-styles";

import { theme } from "../styles/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
