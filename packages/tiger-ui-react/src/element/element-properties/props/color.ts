/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { ElementBase } from "../base";
import type { CSSProperty } from "../../../system";
import { BaseColors } from "../../../theming";

export namespace Color {
    export type Color = ElementBase.CSS.NamedColor | keyof BaseColors;
    export type BgColor = ElementBase.CSS.NamedColor | keyof BaseColors;
    export type Background = CSSProperty.Background;

    export const color = style<Color>((value, { theme }) => ({
        color: theme.colors.base[value as keyof BaseColors]?.main || value,
    }));

    export const bgColor = style<BgColor>((value, { theme }) => ({
        backgroundColor: theme.colors.base[value as keyof BaseColors]?.main || value,
    }));
 
    export const background = style<Background>((value) => ({ background: value }));

    export const props = {
        color,
        bgColor,
        background,
    }

    export type Props = {
        color?: Color,
        bgColor?: BgColor,
        background?: Background,
    }
}