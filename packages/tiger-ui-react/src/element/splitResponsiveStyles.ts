/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { ElementBase } from './element-properties';
import { Breakpoint, Breakpoints } from '../theming';
import { ResponsiveValue } from '../utils';

/**
 * Translates a style object created using breakpoint keys into media query values and returns it as a style object in an understandable format.
 * 
 * **for example:**
 *
 * `responsiveObject`:
 * ```js
 * {
 *   sm: {
 *     color: 'red',
 *   },
 *   md: {
 *     color: 'blue',
 *   },
 * }
 * ```
 * 
 * **output:**
 * ```js 
 * {
 *   `@media (min-width: 576px)`: {
 *     color: 'red',
 *   },
 *   `@media (min-width: 768px)`: {
 *     color: 'blue',
 *   },
 * }
 * ```
*/
export function convertMediaQuery(responsiveObject: ResponsiveValue<ElementBase.StyleObject>, breakpoints: Breakpoints): ElementBase.StyleObject {
  const breakpointsKeys = Object.keys(responsiveObject) as Breakpoint[];
  
  return breakpointsKeys.reduce((cssObject, bpKey) => {
    const mediaQuery = breakpoints.mq(bpKey);

    cssObject[mediaQuery] = responsiveObject[bpKey];

    return cssObject;
  }, {} as ElementBase.StyleObject);
}

/**
 * Finds and returns responsive values in a style object.
*/
export function splitResponsiveStyles(styleObject: ElementBase.StyleObject & ResponsiveValue<ElementBase.StyleObject>, breakpoints: Breakpoints) {
  const { keys } = breakpoints;

  interface StyleObjects {
    responsiveObj: Record<Breakpoint, ElementBase.StyleObject>;
    nonResponsiveObj: ElementBase.StyleObject;
  }

  const objectValues = keys.reduce(
    (styleObjects, bpKey) => {
      /**
       * about structuredClone:
       * @see https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
      */
      const styleObjectsRef = structuredClone(styleObjects);

      const resValue = styleObject[bpKey];
      if (resValue) styleObjectsRef.responsiveObj[bpKey] = resValue;

      if (styleObjectsRef.nonResponsiveObj[bpKey])
        delete styleObjectsRef.nonResponsiveObj[bpKey];

      return styleObjectsRef;
    },
    { responsiveObj: {}, nonResponsiveObj: styleObject } as StyleObjects,
  );

  return {
    responsiveStyles: convertMediaQuery(objectValues.responsiveObj, breakpoints),
    nonResponsiveStyles: objectValues.nonResponsiveObj,
  };
}