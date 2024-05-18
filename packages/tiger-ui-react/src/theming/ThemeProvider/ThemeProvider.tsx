'use client';

import React, { createContext, useMemo, useState } from 'react';
import {
  ThemeProvider as EmotionThemeProvider,
  Theme as EmoTheme,
  Global,
  type Interpolation,
} from '@emotion/react';

import { TigerTheme, type Theme } from '../createTheme';

export interface ThemeProviderProps {
  theme?: TigerTheme;
  children: React.ReactNode;
  globalStyle?: Interpolation<EmoTheme>;
}

export interface ThemeContextValues {
  currentTheme: Theme;
  switchTheme: (newTheme: Theme) => void;
}

export const defaultTheme = new TigerTheme({
  themeName: 'default-theme',
});

export const ThemeContext = createContext<ThemeContextValues | null>(null);

export function ThemeProvider({ theme = defaultTheme, children, globalStyle }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme.tokens);

  const switchTheme = (newTheme: Theme): void => {
    setCurrentTheme(newTheme);
  };

  const contextValues = useMemo(() => ({
    currentTheme,
    switchTheme,
  }), [currentTheme, switchTheme]);

  return (
    <EmotionThemeProvider theme={theme.tokens}>
      <ThemeContext.Provider value={contextValues}>
        <Global styles={globalStyle} />
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
}