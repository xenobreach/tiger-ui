/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Typography {
    export type FontFamily = CSSProperty.FontFamily;
    export type FontSize = CSSProperty.FontSize;
    export type FontWeight = CSSProperty.FontWeight;
    export type FontStyle = CSSProperty.FontStyle;
    export type FontVariant = CSSProperty.FontVariant;
    export type LineHeight = CSSProperty.LineHeight;
    export type LetterSpacing = CSSProperty.LetterSpacing;
    export type WordSpacing = CSSProperty.WordSpacing;
    export type TextAlign = CSSProperty.TextAlign;
    export type TextDecoration = CSSProperty.TextDecoration;
    export type TextDecorationLine = CSSProperty.TextDecorationLine;
    export type TextDecorationStyle = CSSProperty.TextDecorationStyle;
    export type TextDecorationColor = CSSProperty.TextDecorationColor;
    export type TextTransform = CSSProperty.TextTransform;
    export type VerticalAlign = CSSProperty.VerticalAlign;
    export type WhiteSpace = CSSProperty.WhiteSpace;

    export const fontFamily = style<FontFamily>((value) => ({
        fontFamily: value,
    }));
    
    export const fontSize = style<FontSize>((value) => ({
        fontSize: value,
    }));
    
    export const fontWeight = style<FontWeight>((value) => ({
        fontWeight: value,
    }));
    
    export const fontStyle = style<FontStyle>((value) => ({
        fontStyle: value,
    }));
    
    export const fontVariant = style<FontVariant>((value) => ({
        fontVariant: value,
    }));
    
    export const lineHeight = style<LineHeight>((value) => ({
        lineHeight: value,
    }));
    
    export const letterSpacing = style<LetterSpacing>((value) => ({
        letterSpacing: value,
    }));
    
    export const wordSpacing = style<WordSpacing>((value) => ({
        wordSpacing: value,
    }));
    
    export const textAlign = style<TextAlign>((value) => ({
        textAlign: value,
    }));
    
    export const textDecoration = style<TextDecoration>((value) => ({
        textDecoration: value,
    }));
    
    export const textDecorationLine = style<TextDecorationLine>((value) => ({
        textDecorationLine: value,
    }));
    
    export const textDecorationStyle = style<TextDecorationStyle>((value) => ({
        textDecorationStyle: value,
    }));
    
    export const textDecorationColor = style<TextDecorationColor>((value) => ({
        textDecorationColor: value,
    }));
    
    export const textTransform = style<TextTransform>((value) => ({
        textTransform: value,
    }));
    
    export const verticalAlign = style<VerticalAlign>((value) => ({
        verticalAlign: value,
    }));
    
    export const whiteSpace = style<WhiteSpace>((value) => ({
        whiteSpace: value,
    }));
    
    export const props = {
        fontFamily,
        fontSize,
        fontWeight,
        fontStyle,
        fontVariant,
        lineHeight,
        letterSpacing,
        wordSpacing,
        textAlign,
        textDecoration,
        textDecorationLine,
        textDecorationStyle,
        textDecorationColor,
        textTransform,
        verticalAlign,
        whiteSpace,
    };

    export type Props = {
        fontFamily?: FontFamily,
        fontSize?: FontSize,
        fontWeight?: FontWeight,
        fontStyle?: FontStyle,
        fontVariant?: FontVariant,
        lineHeight?: LineHeight,
        letterSpacing?: LetterSpacing,
        wordSpacing?: WordSpacing,
        textAlign?: TextAlign,
        textDecoration?: TextDecoration,
        textDecorationLine?: TextDecorationLine,
        textDecorationStyle?: TextDecorationStyle,
        textDecorationColor?: TextDecorationColor,
        textTransform?: TextTransform,
        verticalAlign?: VerticalAlign,
        whiteSpace?: WhiteSpace,
    };
}

