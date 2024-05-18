import { deepMerge } from '@tiger-ui/utils'
import { Color } from '@tiger-ui/color-palette-generator';

import { defaultThemeOptions } from './defaultThemeOptions';
import createBreakpoints, { type BreakpointsOptions } from './createBreakpoints';

import type { ThemeOptions, Theme, BaseColors } from './theme.type';

/**
 * Create a new customizable theme.
 * 
 * ### Using (TSX)
 * 
 * ```tsx
 * import { TigerTheme } from '@tiger-ui/react';
 * 
 * const theme = new TigerTheme({
 *   themeName: 'my-theme',
 *   colors: {
 *     base: {
 *       primary: {
 *         main: '#51f77d',
 *       },
 *       secondary: {
 *         main: '#ffffff',
 *       },
 *     },
 *   },
 * });
 * 
 * export default function ThemeRegistery({ children }: { children: React.ReactNode }) {
 *   return (
 *     <ThemeProvider theme={theme}>
 *       {children}
 *     </ThemeProvider>
 *   );
 * }
 * ```
*/
export class TigerTheme {
  /**
   * @param themeOptions - Represents the theme design tokens that are considered default and primary.
  */
  constructor(themeOptions: ThemeOptions = {}) {
    this.themeTokens = themeOptions as Theme;
  }

  public get tokens(): Theme {
    this.implementThemeTokens();

    return this.themeTokens;
  }

  private themeTokens: Theme;

  private implementThemeTokens(): void {
    // Combine user-entered and default theme.
    this.themeTokens = deepMerge(defaultThemeOptions, this.themeTokens);

    this.implementBaseColors();
    this.implementBreakpoints();
  }

  /**
   * Automatically detects the dark, light and contrast colors
   * in the base colors that the user has not entered in the theme
   * and fills them with colors suitable for the color system.
   * If the user has not manually filled in other color options
   * other than main when creating the theme, it will place the most
   * appropriate colors.  
  */
  private implementBaseColors(): void {
    if (!this.themeTokens?.colors?.base) return;

    const baseColors = this.themeTokens.colors.base;
    const baseColorsOptions = this.themeTokens.colors.baseColorsOptions;

    for (const key in baseColors) {
      const colorKey = key as keyof BaseColors;

      if (!baseColors) return;
      if (!baseColors[colorKey].main) return;

      const color = new Color(
        {
          main: baseColors[colorKey].main,
          dark: baseColors[colorKey].dark,
          light: baseColors[colorKey].light,
          contrast: baseColors[colorKey].contrast,
        },
        baseColorsOptions[colorKey],
      );

      this.themeTokens.colors.base[colorKey] = {
        main: color.main,
        dark: color.dark,
        light: color.light,
        contrast: color.contrast,
      };
    }
  }

  private implementBreakpoints(): void {
    const tokens = this.themeTokens;

    const breakpoints = createBreakpoints(tokens.breakpoints as BreakpointsOptions);

    this.themeTokens.breakpoints = breakpoints;
  }
};
