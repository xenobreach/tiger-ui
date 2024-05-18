export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface Breakpoints {
  keys: Breakpoint[];
  values: {
    [Key in Breakpoint]: number
  };
  unit: string;
  /**
   * Media Query Min
   * 
   * ```
   * media (min-width: {value}{unit}) {
   *   // ...
   * }
   * ```
  * */
  mqMin: (key: Breakpoint) => string;
  /**
   * Media Query Max
   * 
   * ```
   * media (max-width: {value}{unit}) {
   *   // ...
   * }
   * ```
  * */
  mqMax: (key: Breakpoint) => string;
  /**
   * It allows you to retrieve Media Queries that you have predefined.
  */
  mq: (key: Breakpoint) => string;
}

export interface BreakpointsOptions {
  values?: {
    [Key in Breakpoint]?: number
  };
  mediaQueries?: {
    [Key in Breakpoint]?: string | ((values: { [Key in Breakpoint]?: number }, unit?: string) => string)
  }
  unit?: string;
}

export default function createBreakpoints(breakpoints: BreakpointsOptions): Breakpoints {
  const defaults: BreakpointsOptions = {
    // default values
    values: {
      xs: 0, // phone
      sm: 576, // tablet
      md: 768, // small laptop
      lg: 992, // laptop
      xl: 1200, // desktop
      xxl: 1400, // large screen
    },
    mediaQueries: {
      xs: (values, unit) => `@media (min-width: ${values.xs}${unit})`, // phone
      sm: (values, unit) => `@media (min-width: ${values.sm}${unit})`, // tablet
      md: (values, unit) => `@media (min-width: ${values.md}${unit})`, // small laptop
      lg: (values, unit) => `@media (min-width: ${values.lg}${unit})`, // laptop
      xl: (values, unit) => `@media (min-width: ${values.xl}${unit})`, // desktop
      xxl:  (values, unit) => `@media (min-width: ${values.xxl}${unit})`, // large screen
    },
    unit: 'px',
  }

  const values = {
    ...defaults.values,
    ...breakpoints.values,
  };
  const mediaQueries = {
    ...defaults.mediaQueries,
    ...breakpoints.mediaQueries,
  };
  const unit = breakpoints.unit || defaults.unit;
  
  const keys = Object.keys(values as any) as Breakpoint[];

  const mqMin = (key: Breakpoint): string => {
    const value = values[key];

    if (value !== 0 && !value) return '';

    return `@media (min-width: ${value}${unit})`;
  };
  
  const mqMax = (key: Breakpoint): string => {
    const value = values[key];

    if (value !== 0 && !value) return '';

    return `@media (max-width: ${value}${unit})`;
  };

  const mq = (key: Breakpoint): string => {
    const mediaQuery = mediaQueries[key];

    switch (typeof mediaQuery) {
      case 'function':
        return mediaQuery(values, unit);
      case 'string':
        return mediaQuery;
      default:
        return '';
    }
  }
  
  return {
    keys,
    values,
    unit,
    mqMin,
    mqMax,
    mq,
  } as Breakpoints;
}