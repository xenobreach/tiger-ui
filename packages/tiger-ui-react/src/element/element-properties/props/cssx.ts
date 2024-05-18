/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { style } from "../style";
import type { ElementBase } from "../base";
import type { Theme } from "../../../theming";
import { ResponsiveValue } from "../../../utils";

export namespace CSSX {
    export type CSSXStyleObject = ElementBase.StyleObject & ResponsiveValue<ElementBase.StyleObject>;
    export type CSSXStyleObjectCallback = ((theme: Theme) => CSSXStyleObject);

    export const cssx = style<CSSXStyleObject>((value) => value);

    export const props = {
        cssx,
    }

    export type Props = {
        cssx?: CSSXStyleObject | CSSXStyleObjectCallback,
    }
}