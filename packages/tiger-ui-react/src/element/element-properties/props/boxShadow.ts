/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace BoxShadow {
    export type BoxShadow = CSSProperty.BoxShadow;

    export const boxShadow = style<BoxShadow>((value) => ({ boxShadow: value }));

    export const props = {
        boxShadow,
    }

    export type Props = {
        boxShadow?: BoxShadow,
    }
}