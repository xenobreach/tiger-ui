/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import React, { forwardRef, useMemo } from "react";
import styled from "@emotion/styled";
import isPropValid from '@emotion/is-prop-valid'
import { deepMerge, type PartialKeyOnly } from "@tiger-ui/utils"

import { ElementBase } from './element-properties';

import { type Breakpoint, type Theme, useTheme } from "../theming";

import cssx, { type CSSXStyleObject } from "./cssx";

import { type ResponsiveValue, definedObj } from "../utils";
import isTigerElement from "./isTigerElement";

export interface TigerElementOptions {
  styleVariables: any[];
  baseStyleVariable: any;
  Children: any;
  defaults?: {
    element?: any;
    custom?: any;
  }
  props?: any;
}

export type ElementProps<TagProps> = {
  theme: Theme;
  as?: React.ElementType;
} & TagProps;

export type WithResponsiveProps<Props> = { [Prop in keyof Props]: Props[Prop] | ResponsiveValue<Props[Prop]> }

export type PrivateElementProps<TagProps, Props> =
  WithResponsiveProps<Props>
  &
  Omit<PartialKeyOnly<ElementProps<TagProps>, 'theme'>, keyof Props>
  &
  {
    ref?: React.RefAttributes<any>;
  }

export type BaseElementProps<TagProps, Props extends Record<string, any> = {}> = {
  [Prop in keyof Props]:
    (
      Props[Prop] extends unknown
      ? Record<string, ((props: ElementProps<TagProps> & Props, propValue: any) => ElementBase.StyleObject) | ElementBase.StyleObject>
      : { [Value in Props[Prop]]: ((props: ElementProps<TagProps> & Props, propValue: Value) => ElementBase.StyleObject) | ElementBase.StyleObject; }
    )
    |
    ((propValue: Props[Prop] extends unknown ? any : Props[Prop], props: ElementProps<TagProps> & Props) => ElementBase.StyleObject)
}

interface GenerateTigerElementOptions<BaseProps extends Record<string, any>, TagProps> {
  ChildrenContent?: React.FC<ElementProps<TagProps> & WithResponsiveProps<BaseProps>>;
  styles?: CSSXStyleObject | ((props: ElementProps<TagProps> & BaseProps) => CSSXStyleObject);
  defaultProps?: {
    element?: Partial<ElementProps<TagProps>>;
    custom?: Partial<WithResponsiveProps<BaseProps>>;
  }
  elementProps?: BaseElementProps<TagProps, BaseProps>;
}

export default function generateTigerElement<
  Tag extends ElementBase.HTMLTag | keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any> = ElementBase.HTMLTag
> (tag: Tag, forwardedElementOptions: TigerElementOptions) {
  type TagElement = Tag extends ElementBase.HTMLTag ? Tag : React.ComponentProps<typeof tag>;
  type TagElementProps = TagElement extends ElementBase.HTMLTag ? ElementBase.IntrinsicElements[TagElement] : TagElement;

  return function <BaseProps extends {}> (
    options: GenerateTigerElementOptions<BaseProps, TagElementProps>
  ) {
    const {
      styles,
      elementProps: rawElementProps,
      defaultProps: rawDefaultProps,
      ChildrenContent: rawChildrenContent,
    } = options;

    const elementProps = forwardedElementOptions?.props
      ? deepMerge(
        forwardedElementOptions.props,
        rawElementProps,
      )
      : rawElementProps;

    const defaultProps = forwardedElementOptions?.defaults
      ? deepMerge(
        forwardedElementOptions.defaults,
        rawDefaultProps,
      )
      : rawDefaultProps;

    const ChildrenContent = forwardedElementOptions?.Children || rawChildrenContent;

    // --- Create Styled Element --- //
    // Prevent custom added props from conflicting with default html attributes.
    const elementPropsKeysData = Object.keys(elementProps as any);

    // ref: https://stackoverflow.com/a/73770855
    const shouldForwardProp = (customProps: string[]) =>
      (prop: string): boolean => !customProps.includes(prop);

    const RootElement = styled(tag as any, {
      // ref: https://emotion.sh/docs/styled#customizing-prop-forwarding
      shouldForwardProp: (propName) =>
        isPropValid(propName)
        &&
        shouldForwardProp(['css', ...elementPropsKeysData])(propName),
    })<{ css: ElementBase.StyleObject }>((props) => props.css);
    // --- --- //

    const Element = (_props: any, ref: any) => {
      const theme: Theme = _props.theme || useTheme();

      const { cssx: cssxProp, ...props } = _props;

      const extendedProps = {
        ...defaultProps?.element,
        ...defaultProps?.custom,
        ...props,
        theme,
      };

      // ----------------------------------- //
      // ------- ELEMENT CSS LOGICS ------- //
      let elementStyles: ElementBase.StyleObject = {};

      // - Implement base styles
      const cssxStyles = useMemo(
        () => typeof styles === 'object'
        ? cssx(styles, theme)
        : typeof styles === 'function'
        ? cssx(styles(extendedProps), theme)
        : {},
        [styles, extendedProps],
      )

      // - Implement base styles
      const forwardedElementOptionsStyles = (() => {
        const { styleVariables } = forwardedElementOptions;

        if (!styleVariables.length) return {};

        return styleVariables.reduce((styleObj, currentStyleObj) => {
          switch(typeof currentStyleObj) {
            case 'object':
              return deepMerge(
                styleObj,
                cssx(currentStyleObj, theme),
              );
            case 'function':
              return deepMerge(
                styleObj,
                cssx(currentStyleObj(extendedProps), theme),
              );
            default:
              return styleObj;
          }
        }, {});
      })()

      // - Implement cssx prop
      const cssxPropStyles = useMemo(
        () => typeof cssxProp === 'function' || typeof cssxProp === 'object'
        ? cssx(cssxProp, theme)
        : {},
        [cssxProp, theme],
      )

      const addStyle = (styleValue: any) => {
        /*
          Check whether the style values are undefined.
          Otherwise the added style values may not work properly in some cases.
          About this: https://chat.openai.com/share/0d1df729-e305-4358-9cd9-bc86fc1e6cbd
        */
        if (!styleValue && !(typeof styleValue === 'object')) return;

        const definedStyles = definedObj(styleValue) as any;

        elementStyles = { ...elementStyles, ...definedStyles }
      };

      addStyle(
        deepMerge(
          elementStyles,
          forwardedElementOptionsStyles,
          cssxStyles,
          cssxPropStyles
        )
      )

      // - Implement user props styles
      const generateUserPropsStyles = () => {
        if (!elementProps) return;

        const elementPropsKeys = Object.keys(elementProps as any);

        elementPropsKeys.forEach((elementPropKey) => {
          const elementPropValue = elementProps[elementPropKey];
          /**
           * Related prop value entered during use
          */
         const propValue = extendedProps[elementPropKey];
         const isResponsive = typeof propValue === 'object';

          // --- CALLBACK STYLE LOGIC --- //
          /*
            if the property took the following values:
          
            example:
            {
              bgColor: (propValue, props) => ({
                backgroundColor: propValue, 
              }),
             }
          */
          if (typeof elementPropValue === 'function') {
            // --- RESPONSIVE PROP VALUE --- //
            if (isResponsive) {
              const responsivePropValues = propValue as ResponsiveValue<any>;

              const responsiveKeys = theme.breakpoints.keys
                .filter((key) => (Object.keys(responsivePropValues) as Breakpoint[]).includes(key));

              const finalStyles = responsiveKeys.reduce((styleObject, bpKey) => {
                const mqString = theme.breakpoints.mq(bpKey as any);

                styleObject[mqString] = elementPropValue(propValue[bpKey], extendedProps)

                return styleObject;
              }, {} as any);

              addStyle(
                deepMerge(
                  finalStyles,
                  elementStyles,
                ),
              );

              return;
            }
            // --- END - RESPONSIVE PROP VALUE --- //

            const propStyle = elementPropValue(propValue, extendedProps);
            addStyle(propStyle);

            return;
          }

          // --- OBJECT STYLE LOGIC --- //
          /*
            if the property took the following values:
          
            example:
            {
              bgColor: {
                red: {
                  backgroundColor: 'red',
                },
                black: {
                  backgroundColor: 'black',
                }
              },
             }
          */
          if (typeof elementPropValue === 'object') {
            // --- RESPONSIVE PROP VALUE --- //
            if (isResponsive) {
              const responsivePropValues = propValue as ResponsiveValue<any>;

              const resKeys = theme.breakpoints.keys
                .filter((key) => (Object.keys(responsivePropValues) as Breakpoint[]).includes(key));

              const finalStyles = resKeys.reduce((styleObject, bpKey) => {
                const bpValue = responsivePropValues[bpKey];

                const value = elementPropValue[bpValue as BaseProps[any]];

                const mqString = theme.breakpoints.mq(bpKey as any);

                switch (typeof value) {
                  case 'object':
                    styleObject[mqString] = value;
                    break;
                  case 'function':
                    styleObject[mqString] = value(extendedProps, bpValue);
                }

                return styleObject;
              }, {} as any);

              addStyle(
                deepMerge(
                  finalStyles,
                  elementStyles,
                ),
              );

              return;
            }
            // --- END - RESPONSIVE PROP VALUE --- //

            const activePropValue = elementPropValue[propValue];

            let propStyle = {};

            switch (typeof activePropValue) {
              case 'object':
                propStyle = activePropValue;
                break;
              case 'function':
                propStyle = activePropValue(extendedProps, /* prop value: */ extendedProps[elementPropKey]);
            }

            addStyle(
              deepMerge(
                propStyle,
                elementStyles,
              )
            );
          }
        });
      }
      
      generateUserPropsStyles();
      // ------ END - ELEMENT CSS LOGICS ------ //
      // ------------------------------------- //

      const renderChildren = useMemo(
        () => ChildrenContent ? (
          <ChildrenContent {...extendedProps}>
            {extendedProps.children}
          </ChildrenContent>
        ) : extendedProps.children,
        [extendedProps],
      )

      if (isTigerElement(tag)) {
        const TigerElement = tag;

        return (
          <TigerElement ref={ref} cssx={elementStyles} {...extendedProps}>
            {renderChildren}
          </TigerElement>
        );
      }

      return (
        <RootElement ref={ref} css={elementStyles} {...extendedProps}>
          {renderChildren}
        </RootElement>
      );
    };

    const ForwardRefElement = forwardRef(Element) as React.FC<PrivateElementProps<TagElementProps, BaseProps>>

    // set tiger element options
    ForwardRefElement.__tiger_options = {
      styleVariables: [...forwardedElementOptions.styleVariables, styles],
      baseStyleVariable: styles,
      Children: ChildrenContent,
      defaults: defaultProps,
      props: elementProps,
    };

    return ForwardRefElement;
  }
}
