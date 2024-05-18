/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { type CSSXStyleObject } from './cssx';
import { ElementProps as SystemElementProps, ElementBase } from './element-properties';
import generateTigerElement, {
  type ElementProps,
  type WithResponsiveProps,
  type BaseElementProps as Props,
  type TigerElementOptions,
} from './generateTigerElement';
import isTigerElement from './isTigerElement';

declare module 'react' {
  interface FunctionComponent {
    /**
     * Returns an object containing the properties of an element created with createElement.
    */
    __tiger_options?: TigerElementOptions;
  }
}

type DefaultElementProps = SystemElementProps.CSSX.Props;

/**
 * ### Create a new customizable element
  *
  * - example:
  * ```ts
  * import { createElement } from '@tiger-ui/react';
  * 
  * const Button = createElement('button')({
  *    style: {
  *      cursor: 'pointer',
  *      padding: '0.6rem 1.8rem',
  *      fontSize: '15px',
  *    },
  *    props: {
  *      variant: {
  *        contained: ({ theme }) => ({
  *          color: '#000000',
  *          backgroundColor: theme.colors.base.primary.main,
  *        }),
  *        outlined: ({ theme }) => ({
  *          color: theme.colors.base.primary.main,
  *          border: `1px solid ${theme.colors.base.primary.main}`,
  *          backgroundColor: 'transparent',
  *        }),
  *       },
  *    },
  *    defaults: {
  *     custom: {
  *       variant: 'contained',
  *     },
  *    },
  *    // ...
  * })
  * ```
*/
export function createElement<
  Tag extends ElementBase.HTMLTag | keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any> = ElementBase.HTMLTag
> (tag: Tag) {
  type TagElement = Tag extends ElementBase.HTMLTag ? Tag : React.ComponentProps<typeof tag>;
  type TagElementProps = TagElement extends ElementBase.HTMLTag ? ElementBase.IntrinsicElements[TagElement] : TagElement;

  // if the incoming tag is a previously created tiger element component, get its properties.
  const forwardedElementOptions: TigerElementOptions = isTigerElement(tag)
    ? (tag as any)?.__tiger_options
    : {
      styleVariables: [],
      baseStyleVariable: {},
      props: undefined,
      Children: undefined,
      defaults: undefined,
    };

  return function <BaseProps extends Record<string, any>> (
    options: {
      style?: CSSXStyleObject | ((props: ElementProps<TagElementProps> & BaseProps) => CSSXStyleObject)
      /**
       * You can add your own custom props.
       * 
       * ```js
       * {
       *   props: {
       *     size: {
       *       small: {
       *         width: '200px',
       *         height: '200px',
       *       },
       *       medium: {
       *         width: '300px',
       *         height: '300px',
       *       },
       *     },
       *   },
       * }
       * ```
       * or:
       * ```js
       * {
       *    props: {
       *      size: (propValue, props) => ({
       *         width: `${propValue}px`,
       *         height: `${propValue}px`,
       *      }),
       *    }
       * }
       * ```
       * 
       * use element:
       * ```jsx
       * function MyComponent() {
       *  return (
       *    <MyElement size="md" />
       *  );
       * }
       * ```
       * or:
       * ```jsx
       * function MyComponent() {
       *  return (
       *    <MyElement size={300} />
       *  );
       * }
       * ```
      */
      props?: Props<TagElementProps, BaseProps>;
      defaults?: {
        element?: Partial<ElementProps<TagElementProps>>;
        custom?: Partial<WithResponsiveProps<BaseProps>>
      };
      extendedProps?: Array<Props<TagElementProps, {}>>;
      Children?: React.FC<ElementProps<TagElementProps> & WithResponsiveProps<BaseProps>>;
    } = {},
  ) {
    const {
      style = {},
      props,
      defaults,
      extendedProps,
      Children,
    } = options;

    const defaultElementProps = {
      ...SystemElementProps.CSSX.props,
    };

    const elementProps = extendedProps ? {
      ...props,
      ...extendedProps?.reduce(
        (_extendedProps, _props) => ({ ..._extendedProps, ..._props }),
        {},
      ),
      ...defaultElementProps,
    } : {
      ...props,
      ...defaultElementProps
    };

    return /* Element */ generateTigerElement(tag, forwardedElementOptions)<BaseProps & DefaultElementProps>({
      styles: style,
      elementProps: elementProps as any,
      defaultProps: defaults,
      ChildrenContent: Children,
    });
  }
}