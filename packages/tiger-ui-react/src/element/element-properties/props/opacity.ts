/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { CSSProperty } from "../../../system";

export namespace Opacity {
    export type Opacity = CSSProperty.Opacity;

    export const opacity = style<Opacity>((value) => ({ opacity: value }));

    export const props = {
        opacity,
    }

    export type Props = {
        opacity?: Opacity,
    }
}