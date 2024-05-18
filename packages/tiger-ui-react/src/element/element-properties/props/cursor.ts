/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Cursor {
    export type Cursor = CSSProperty.Cursor;

    export const cursor = style<Cursor>((value) => ({ cursor: value }));

    export const props = {
        cursor,
    }

    export type Props = {
        cursor?: Cursor,
    }
}