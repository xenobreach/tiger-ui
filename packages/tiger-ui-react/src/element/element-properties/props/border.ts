/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { pxToRem } from "@tiger-ui/utils";
import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Border {
    export type Border = CSSProperty.Border;
    export type BorderStyle = CSSProperty.BorderStyle;
    export type BorderColor = CSSProperty.BorderColor;
    export type BorderWidth = CSSProperty.BorderWidth | number;
    export type BorderRadius = CSSProperty.BorderRadius | number;
    export type BorderTopLeftRadius = CSSProperty.BorderTopLeftRadius | number;
    export type BorderTopRightRadius = CSSProperty.BorderTopRightRadius | number;
    export type BorderBottomRightRadius = CSSProperty.BorderBottomRightRadius | number;
    export type BorderBottomLeftRadius = CSSProperty.BorderBottomLeftRadius | number;

    export const border = style<Border>((value) => ({
        border: value,
    }));

    export const borderStyle = style<BorderStyle>((value) => ({
        borderStyle: value,
    }));

    export const borderColor = style<BorderColor>((value) => ({
        borderColor: value,
    }));

    export const borderWidth = style<BorderWidth>((value) => ({
        borderWidth: pxToRem(value),
    }));

    export const borderRadius = style<BorderRadius>((value) => ({
        borderRadius: pxToRem(value),
    }));

    export const borderTopLeftRadius = style<BorderTopLeftRadius>((value) => ({
        borderTopLeftRadius: pxToRem(value),
    }));

    export const borderTopRightRadius = style<BorderTopRightRadius>((value) => ({
        borderTopRightRadius: pxToRem(value),
    }));

    export const borderBottomRightRadius = style<BorderBottomRightRadius>((value) => ({
        borderBottomRightRadius: pxToRem(value),
    }));

    export const borderBottomLeftRadius = style<BorderBottomLeftRadius>((value) => ({
        borderBottomLeftRadius: pxToRem(value),
    }));
    
    export const props = {
        border,
        borderStyle,
        borderColor,
        borderWidth,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
    };

    export type Props = {
        border?: Border,
        borderStyle?: BorderStyle,
        borderColor?: BorderColor,
        borderWidth?: BorderWidth,
        borderRadius?: BorderRadius,
        borderTopLeftRadius?: BorderTopLeftRadius,
        borderTopRightRadius?: BorderTopRightRadius,
        borderBottomRightRadius?: BorderBottomRightRadius,
        borderBottomLeftRadius?: BorderBottomLeftRadius,
    };
}
