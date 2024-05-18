import type { ThemeOptions } from "./theme.type";

/* ****************************************************************************
** DEFAULT THEME
** These are common values used in all themes.
**
! * IMPORTANT WARNING: Be careful to enter the default token values completely.
! *                    Otherwise, some features that use default token values in
! *                    the theme may break.
**************************************************************************** */

export const defaultThemeOptions: ThemeOptions = {
  themeName: '',
  shadows: {
    values: {
      none: 'none',
      xs: '0 0 45px rgba(0, 0, 0, 0.1)',
      sm: '0 0 45px rgba(0, 0, 0, 0.3)',
      md: '0 0 45px rgba(0, 0, 0, 0.5)',
      lg: '0 0 45px rgba(0, 0, 0, 0.8)',
      xl: '0 0 45px rgba(0, 0, 0, 1)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
    unit: 'px',
  },
  colors: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    base: {
      primary: {
        main: '#26dbb0',
      },
      secondary: {
        main: '#27d86e',
      },
      error: {
        main: '#d32f2f',
      },
      info: {
        main: '#0288d1',
      },
      warning: {
        main: '#ed6c02',
      },
    },
    baseColorsOptions: {
      primary: undefined,
      secondary: undefined,
      error: undefined,
      info: undefined,
      warning: undefined,
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      default: '#ffffff',
      layer: '#E2E2E2',
    },
    actions: {
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  radius: {
    values: {
      none: '0px',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      xxl: '12px',
      full: '50px',
    },
  },
  fonts: {
    roboto: 'Roboto',
    poppins: 'Poppins',
    montserrat: 'Montserrat',
  },
  opacities: {
    values: {
      hidden: 0,
      xs: 0.15, 
      sm: 0.30,
      md: 0.50,
      lg: 0.70,
      xl: 0.85,
      visible: 1,
      disabled: 0.50,
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '30px',
      fontWeight: 500,
      lineHeight: 1.375,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 1.375,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.375,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.625,
    },
    paragraph: {
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.3,
    },
  },
  transitions: {
    duration: {
      slow: '0.7s',
      mid: '0.3s',
      fast: '0.1s',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeInOut: 'ease-in-out',
      easeOut: 'ease-out',
      moment: 'cubic-bezier(0, 1.63, 0.56, 1.85)',
    },
  },
};