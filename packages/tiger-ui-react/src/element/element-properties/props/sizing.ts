/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { pxToRem } from "@tiger-ui/utils";
import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Sizing {
    export type Width = CSSProperty.Width | number;
    export type MaxWidth = CSSProperty.MaxWidth | number;
    export type MinWidth = CSSProperty.MinWidth | number;
    export type Height = CSSProperty.Height | number;
    export type MaxHeight = CSSProperty.MaxHeight | number;
    export type MinHeight = CSSProperty.MinHeight | number;

    export const width = style<Width>((value) => ({
        width: pxToRem(value),
    }));

    export const maxWidth = style<MaxWidth>((value) => ({
        maxWidth: pxToRem(value),
    }));

    export const minWidth = style<MinWidth>((value) => ({
        minWidth: pxToRem(value),
    }));

    export const height = style<Height>((value) => ({
        height: pxToRem(value),
    }));

    export const maxHeight = style<MaxHeight>((value) => ({
        maxHeight: pxToRem(value),
    }));

    export const minHeight = style<MinHeight>((value) => ({
        minHeight: pxToRem(value),
    }));

    export const props = {
        width,
        maxWidth,
        minWidth,
        height,
        maxHeight,
        minHeight,
    }

    export type Props = {
        width?: Width,
        maxWidth?: MaxWidth,
        minWidth?: MinWidth,
        height?: Height,
        maxHeight?: MaxHeight,
        minHeight?: MinHeight,
    }
}