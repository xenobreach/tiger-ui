/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { Border as BorderProps } from './props/border';
import { BoxShadow as BoxShadowProps } from './props/boxShadow';
import { Color as ColorProps } from './props/color';
import { Cursor as CursorProps } from './props/cursor';
import { Display as DisplayProps } from './props/display';
import { Flexbox as FlexboxProps } from './props/flexbox';
import { Opacity as OpacityProps } from './props/opacity';
import { Positions as PositionsProps } from './props/positions';
import { Sizing as SizingProps } from './props/sizing';
import { Spacing as SpacingProps } from './props/spacing';
import { Typography as TypographyProps } from './props/typography';

import { CSSX as CSSXProps } from './props/cssx';

export namespace ElementProps {
    export import CSSX = CSSXProps;

    export import Border = BorderProps;
    export import BoxShadow = BoxShadowProps;
    export import Color = ColorProps;
    export import Cursor = CursorProps;
    export import Display = DisplayProps;
    export import Flexbox = FlexboxProps;
    export import Opacity = OpacityProps;
    export import Positions = PositionsProps;
    export import Sizing = SizingProps;
    export import Spacing = SpacingProps;
    export import Typography = TypographyProps;
}