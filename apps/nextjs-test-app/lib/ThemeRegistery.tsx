'use client'

import { ThemeProvider, TigerTheme } from "@tiger-ui/react";

const theme = new TigerTheme({
  themeName: 'my-theme',
  colors: {
    base: {
      primary: {
        main: '#26dbb0',
      },
      secondary: {
        main: '#27d86e',
      },
    },
    background: {
      default: '#1c1c1c',
    }
  },
});

export default function ThemeRegistery({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      theme={theme}
      globalStyle={{
        'body': {
          backgroundColor: theme.tokens.colors.background.default,
          fontFamily: '"Poppins", sans-serif',
          margin: 0,
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
}
