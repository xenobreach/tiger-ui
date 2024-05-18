/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { ElementProps, style } from './element-properties';
import { createElement } from './createElement';

export namespace Element {
  // ---------------------------
  // Create Element
  // ---------------------------
  /**
   * ### Create a new customizable element
   *
   * - default usage:
   * ```js
   * import { Element } from '@tiger-ui/react';
   * 
   * const Button = Element.create('button')({
   *    // ...
   * })
   * ```
   * 
   * - static function usage:
   * ```js
   * import { createElement } from '@tiger-ui/react';
   * 
   * const Button = createElement('button')({
   *    // ...
   * })
   * ```
  */
  export const create = createElement;

  // ---------------------------
  // Create Style Props
  // ---------------------------
  /**
   * ### Create a new element prop style
   *
   * - default usage:
   * ```js
   * import { Element } from '@tiger-ui/react';
   * 
   * const marginX = Element.createProp((propValue) => ({
   *    marginLeft: propValue,
   *    marginRight: propValue,
   * }))
   * 
   * const Box = Element.create('div')({
   *    props: {
   *        marginX,
   *    },
   * })
   * ```
   * - static function usage:
   * ```js
   * import { style, Element } from '@tiger-ui/react';
   * 
   * const marginX = style((propValue) => ({
   *    marginLeft: propValue,
   *    marginRight: propValue,
   * }))
   * 
   * const Box = Element.create('div')({
   *    props: {
   *        marginX,
   *    },
   * })
   * ```
  */
  export const createProp = style;

  // ---------------------------
  // Default System Element Props
  // ---------------------------
  /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.CSSX.Props>({
   *    extendedProps: [Element.CSSX.props],
   *    // ...
   * });
   * ```
  */
  export import CSSX = ElementProps.CSSX;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Border.Props>({
   *    extendedProps: [Element.Border.props],
   *    // ...
   * });
   * ```
  */
  export import Border = ElementProps.Border;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.BoxShadow.Props>({
   *    extendedProps: [Element.BoxShadow.props],
   *    // ...
   * });
   * ```
  */
  export import BoxShadow = ElementProps.BoxShadow;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Color.Props>({
   *    extendedProps: [Element.Color.props],
   *    // ...
   * });
   * ```
  */
  export import Color = ElementProps.Color;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Cursor.Props>({
   *    extendedProps: [Element.Cursor.props],
   *    // ...
   * });
   * ```
  */
  export import Cursor = ElementProps.Cursor;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Display.Props>({
   *    extendedProps: [Element.Display.props],
   *    // ...
   * });
   * ```
  */
  export import Display = ElementProps.Display;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Flexbox.Props>({
   *    extendedProps: [Element.Flexbox.props],
   *    // ...
   * });
   * ```
  */
  export import Flexbox = ElementProps.Flexbox;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Opacity.Props>({
   *    extendedProps: [Element.Opacity.props],
   *    // ...
   * });
   * ```
  */
  export import Opacity = ElementProps.Opacity;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Positions.Props>({
   *    extendedProps: [Element.Positions.props],
   *    // ...
   * });
   * ```
  */
  export import Positions = ElementProps.Positions;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Sizing.Props>({
   *    extendedProps: [Element.Sizing.props],
   *    // ...
   * });
   * ```
  */
  export import Sizing = ElementProps.Sizing;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.Spacing.Props>({
   *    extendedProps: [Element.Spacing.props],
   *    // ...
   * });
   * ```
  */
  export import Spacing = ElementProps.Spacing;
    /**
   * #### Usage:
   * ```ts
   * const MyElement = Element.create('div')<Element.typography.Props>({
   *    extendedProps: [Element.Typography.props],
   *    // ...
   * });
   * ```
  */
  export import Typography = ElementProps.Typography;
}
