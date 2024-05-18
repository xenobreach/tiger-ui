/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { pxToRem } from "@tiger-ui/utils";
import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Flexbox {
    export type Flex = CSSProperty.Flex;
    export type FlexDirection = CSSProperty.FlexDirection;
    export type FlexBasis = CSSProperty.FlexBasis;
    export type FlexFlow = CSSProperty.FlexFlow;
    export type FlexGrow = CSSProperty.FlexGrow;
    export type FlexShrink = CSSProperty.FlexShrink;
    export type FlexWrap = CSSProperty.FlexWrap;

    export type JustifyContent = CSSProperty.JustifyContent;
    export type JustifyItems = CSSProperty.JustifyItems;
    export type JustifySelf = CSSProperty.JustifySelf;
    export type JustifyTracks = CSSProperty.JustifyTracks;

    export type AlignItems = CSSProperty.AlignItems;
    export type AlignContent = CSSProperty.AlignContent;
    export type AlignSelf = CSSProperty.AlignSelf;
    export type AlignTracks = CSSProperty.AlignTracks;

    export type Gap = CSSProperty.Gap | number;
    export type RowGap = CSSProperty.RowGap | number;
    export type ColumnGap = CSSProperty.ColumnGap | number;

    export type Order = CSSProperty.Order;

    export const flex = style<Flex>((value) => ({ flex: value }));
    export const flexDirection = style<FlexDirection>((value) => ({ flexDirection: value }));
    export const flexBasis = style<FlexBasis>((value) => ({ flexBasis: value }));
    export const flexFlow = style<FlexFlow>((value) => ({ flexFlow: value }));
    export const flexGrow = style<FlexGrow>((value) => ({ flexGrow: value }));
    export const flexShrink = style<FlexShrink>((value) => ({ flexShrink: value }));
    export const flexWrap = style<FlexWrap>((value) => ({ flexWrap: value }));

    export const justifyContent = style<JustifyContent>((value) => ({ justifyContent: value }));
    export const justifyItems = style<JustifyItems>((value) => ({ justifyItems: value }));
    export const justifySelf = style<JustifySelf>((value) => ({ justifySelf: value }));
    export const justifyTracks = style<JustifyTracks>((value) => ({ justifyTracks: value }));

    export const alignItems = style<AlignItems>((value) => ({ alignItems: value }));
    export const alignContent = style<AlignContent>((value) => ({ alignContent: value }));
    export const alignSelf = style<AlignSelf>((value) => ({ alignSelf: value }));
    export const alignTracks = style<AlignTracks>((value) => ({ alignTracks: value }));

    export const gap = style<Gap>((value) => ({ gap: pxToRem(value) }));
    export const rowGap = style<RowGap>((value) => ({ rowGap: pxToRem(value) }));
    export const columnGap = style<ColumnGap>((value) => ({ columnGap: pxToRem(value) }));

    export const order = style<Order>((value) => ({ order: value }));

    export const props = {
        flex,
        flexDirection,
        flexBasis,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
        justifyItems,
        justifySelf,
        justifyTracks,
        alignItems,
        alignContent,
        alignSelf,
        alignTracks,
        gap,
        rowGap,
        columnGap,
        order,
    }

    export type Props = {
        flex?: Flex,
        flexDirection?: FlexDirection,
        flexBasis?: FlexBasis,
        flexFlow?: FlexFlow,
        flexGrow?: FlexGrow,
        flexShrink?: FlexShrink,
        flexWrap?: FlexWrap,
        justifyContent?: JustifyContent,
        justifyItems?: JustifyItems,
        justifySelf?: JustifySelf,
        justifyTracks?: JustifyTracks,
        alignItems?: AlignItems,
        alignContent?: AlignContent,
        alignSelf?: AlignSelf,
        alignTracks?: AlignTracks,
        gap?: Gap,
        rowGap?: RowGap,
        columnGap?: ColumnGap,
        order?: Order,
    }
}