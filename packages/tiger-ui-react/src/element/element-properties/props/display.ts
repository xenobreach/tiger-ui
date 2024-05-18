/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Display {
    export type Display = CSSProperty.Display;
    export type Visibility = CSSProperty.Visibility;
    export type WhiteSpace = CSSProperty.WhiteSpace;
    export type Overflow = CSSProperty.Overflow;
    export type TextOverflow = CSSProperty.TextOverflow;

    export const display = style<Display>((value) => ({
        display: value,
    }));
    
    export const visibility = style<Visibility>((value) => ({
        visibility: value,
    }));

    export const whiteSpace = style<WhiteSpace>((value) => ({
        whiteSpace: value,
    }));

    export const overflow = style<Overflow>((value) => ({
        overflow: value,
    }));

    export const textOverflow = style<TextOverflow>((value) => ({
        textOverflow: value,
    }));
    
    export const props = {
        display,
        visibility,
        whiteSpace,
        overflow,
        textOverflow,
    };

    export type Props = {
        display?: Display,
        visibility?: Visibility,
        whiteSpace?: WhiteSpace,
        overflow?: Overflow,
        textOverflow?: TextOverflow,
    };
}

