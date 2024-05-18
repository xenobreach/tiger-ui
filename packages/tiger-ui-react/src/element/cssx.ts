import { type Theme } from "../theming";

import { splitResponsiveStyles } from "./splitResponsiveStyles";

import { Element } from "./element";

export type CSSXStyleObject = Element.CSSX.CSSXStyleObject;
export type CSSXStyleObjectCallback = Element.CSSX.CSSXStyleObjectCallback;

export default function cssx(
  styleObject: CSSXStyleObject | CSSXStyleObjectCallback,
  theme: Theme,
) {
  const styles = (() => {
    switch (typeof styleObject) {
      case 'function':
        return styleObject(theme);
      case 'object':
        return styleObject;
    }
  })();
  
  const { nonResponsiveStyles, responsiveStyles } = splitResponsiveStyles(styles, theme.breakpoints)
  
  return { ...nonResponsiveStyles, ...responsiveStyles };
}