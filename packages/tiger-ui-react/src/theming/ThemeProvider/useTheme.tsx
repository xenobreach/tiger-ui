import { useContext } from 'react';

import { ThemeContext, defaultTheme } from './ThemeProvider';
import { Theme } from '../createTheme';

export function useTheme(): Theme {
  const context = useContext(ThemeContext);

  if (!context || !context?.currentTheme) {
    return defaultTheme.tokens;
  }

  return context.currentTheme;
};

/**
 * USAGE:
 * ```tsx
 * import { createTheme, useSwitchTheme } from '@tiger-ui/react';
 * 
 * const myTheme = createTheme({
 *   // ...
 * })
 * 
 * const switchTheme = useSwitchTheme();
 * 
 * return (
 *   <button onClick={() => switchTheme(myTheme)}>set dark theme</button>
 * )
 * ```
*/
export function useSwitchTheme(): (newTheme: Theme) => void {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('Context values could not be read. Please check if the value is \'null\'. (reading for useSwitchTheme)');
  }

  return context.switchTheme;
};
