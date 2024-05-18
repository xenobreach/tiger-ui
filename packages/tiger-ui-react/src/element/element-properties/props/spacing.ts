/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { pxToRem } from "@tiger-ui/utils";
import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Spacing {
    export type Margin = CSSProperty.Margin | number;
    export type MarginX = CSSProperty.Margin | number;
    export type MarginY = CSSProperty.Margin | number;
    export type MarginLeft = CSSProperty.MarginLeft | number;
    export type MarginRight = CSSProperty.MarginRight | number;
    export type MarginTop = CSSProperty.MarginTop | number;
    export type MarginBottom = CSSProperty.MarginBottom | number;

    export type Padding = CSSProperty.Padding | number;
    export type PaddingX = CSSProperty.Padding | number;
    export type PaddingY = CSSProperty.Padding | number;
    export type PaddingLeft = CSSProperty.PaddingLeft | number;
    export type PaddingRight = CSSProperty.PaddingRight | number;
    export type PaddingTop = CSSProperty.PaddingTop | number;
    export type PaddingBottom = CSSProperty.PaddingBottom | number;

    export const margin = style<Margin>((value) => ({
        margin: pxToRem(value),
    }));

    export const marginX = style<MarginX>((value) => ({
        marginLeft: pxToRem(value),
        marginRight: pxToRem(value),
    }));
    
    export const marginY = style<MarginY>((value) => ({
        marginTop: pxToRem(value),
        marginBottom: pxToRem(value),
    }));

    export const marginLeft = style<MarginLeft>((value) => ({
        marginLeft: pxToRem(value),
    }));

    export const marginRight = style<MarginRight>((value) => ({
        marginRight: pxToRem(value),
    }));

    export const marginTop = style<MarginTop>((value) => ({
        marginTop: pxToRem(value),
    }));

    export const marginBottom = style<MarginBottom>((value) => ({
        marginBottom: pxToRem(value),
    }));

    export const padding = style<Padding>((value) => ({
        padding: pxToRem(value),
    }));

    export const paddingX = style<PaddingX>((value) => ({
        paddingLeft: pxToRem(value),
        paddingRight: pxToRem(value),
    }));
    
    export const paddingY = style<PaddingY>((value) => ({
        paddingTop: pxToRem(value),
        paddingBottom: pxToRem(value),
    }));

    export const paddingLeft = style<PaddingLeft>((value) => ({
        paddingLeft: pxToRem(value),
    }));

    export const paddingRight = style<PaddingRight>((value) => ({
        paddingRight: pxToRem(value),
    }));

    export const paddingTop = style<PaddingTop>((value) => ({
        paddingTop: pxToRem(value),
    }));

    export const paddingBottom = style<PaddingBottom>((value) => ({
        paddingBottom: pxToRem(value),
    }));

    export const props = {
        m: margin,
        mx: marginX,
        my: marginY,
        ml: marginLeft,
        mr: marginRight,
        mt: marginTop,
        mb: marginBottom,
        p: padding,
        px: paddingX,
        py: paddingY,
        pl: paddingLeft,
        pr: paddingRight,
        pt: paddingTop,
        pb: paddingBottom,
    }

    export type Props = {
        m?: Margin,
        mx?: MarginX,
        my?: MarginY,
        ml?: MarginLeft,
        mr?: MarginRight,
        mt?: MarginTop,
        mb?: MarginBottom,
        p?: Padding,
        px?: PaddingX,
        py?: PaddingY,
        pl?: PaddingLeft,
        pr?: PaddingRight,
        pt?: PaddingTop,
        pb?: PaddingBottom,
    }
}