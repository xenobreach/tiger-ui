/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { pxToRem } from "@tiger-ui/utils";
import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Positions {
    export type Position = CSSProperty.Position;
    export type Right = CSSProperty.Right | number;
    export type Left = CSSProperty.Left | number;
    export type Top = CSSProperty.Top | number;
    export type Bottom = CSSProperty.Bottom | number;
    export type ZIndex = CSSProperty.ZIndex | number;

    export const position = style<Position>((value) => ({ position: value }));

    export const right = style<Right>((value) => ({
        right: pxToRem(value)
    }));

    export const left = style<Left>((value) => ({
        left: pxToRem(value)
    }));

    export const top = style<Top>((value) => ({
        top: pxToRem(value)
    }));

    export const bottom = style<Bottom>((value) => ({
        bottom: pxToRem(value)
    }));

    export const zIndex = style<ZIndex>((value) => ({ zIndex: value }));

    export const props = {
        position,
        right,
        left,
        top,
        bottom,
        zIndex,
    }

    export type Props = {
        position?: Position,
        right?: Right,
        left?: Left,
        top?: Top,
        bottom?: Bottom,
        zIndex?: ZIndex,
    }
}