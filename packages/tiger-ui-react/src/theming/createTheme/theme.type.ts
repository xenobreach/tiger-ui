import type { RequiredKeyOnly } from '@tiger-ui/utils'
import type { Breakpoints, BreakpointsOptions } from './createBreakpoints'
import { ColorOptions } from '@tiger-ui/color-palette-generator';

// --- SHADOW --- //
export interface ShadowsValues {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface Shadows {
  values: ShadowsValues;
};

// --- COLORS --- //
// - Common Colors
export interface CommonColors {
  black: string;
  white: string;
};

// - Grey Colors
export interface GreyColors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// - Text Colors 
export interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
};

// - Background Colors
export interface BackgroundColors {
  default: string;
  layer: string;
};

// - Actions Colors
export interface ActionsColors {
  disabled: string;
  disabledBackground: string;
}

// - Base Colors
export interface BaseColorsTypes {
  main: string;
  dark: string;
  light: string;
  contrast: string;
}
export interface BaseColors {
  primary: BaseColorsTypes;
  secondary: BaseColorsTypes;
  error: BaseColorsTypes;
  warning: BaseColorsTypes;
  info: BaseColorsTypes;
}
export type BaseColorsOptions = {
  [key in keyof BaseColors]?: ColorOptions;
}

// --- RADIUS --- //
// - Values
export interface RadiusValues {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
};

export interface Radius {
  values: RadiusValues;
}

// --- FONTS --- //
export interface Fonts {
  [key: string]: string;
}

// --- OPACITIES --- //
// - Values
export interface OpacitiesValues {
  hidden: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  visible: number;
  disabled: number;
}

export interface Opacities {
  values: OpacitiesValues;
}

// --- TYPOGRAPHY --- //
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph';
export type TypographiesVariants = Record<
  TypographyVariant,
  {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  }
>

export interface Typographies extends TypographiesVariants {}

// --- TRANSITIONS --- //
// - Durations
export interface TransitionsDurations {
  slow: string;
  mid: string;
  fast: string;
}

// - Easing
export interface TransitionsEasing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  ease: string;
  moment: string;
}

export interface Transitions {
  duration: TransitionsDurations;
  easing: TransitionsEasing;
}

// --- THEME --- //
export interface Theme {
  themeName: string;
  shadows: Shadows;
  breakpoints: Breakpoints;
  colors: {
    common: CommonColors;
    grey: GreyColors;
    text: TextColors;
    divider: string;
    background: BackgroundColors;
    actions: ActionsColors;
    base: BaseColors;
    baseColorsOptions: BaseColorsOptions;
  };
  radius: Radius;
  fonts: Fonts;
  opacities: Opacities;
  typography: Typographies;
  transitions: Transitions;
};

/**
 * Theme values entered by the user.
*/
export interface ThemeOptions {
  themeName?: string;
  shadows?: Shadows;
  breakpoints?: BreakpointsOptions;
  colors?: Partial<{
    common: Partial<CommonColors>;
    grey: Partial<GreyColors>;
    text: Partial<TextColors>;
    divider: string;
    background: Partial<BackgroundColors>;
    actions: Partial<ActionsColors>;
    base:
      Partial<Record<keyof BaseColors, RequiredKeyOnly<Partial<BaseColorsTypes>, 'main'>>>
      | Record<string, RequiredKeyOnly<Partial<BaseColorsTypes>, 'main'>>;
    baseColorsOptions: BaseColorsOptions;
  }>;
  radius?: Radius;
  fonts?: Fonts;
  opacities?: Opacities;
  typography?: Typographies;
  transitions?: Transitions;
}
