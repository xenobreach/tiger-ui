import '@emotion/react';

import { type Theme as TigerTheme } from '../../theming';

declare module '@emotion/react' {
  export interface Theme extends TigerTheme {}
}