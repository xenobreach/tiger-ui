/*
---------------------------
Copyright (c) Xenobreach - Tiger UI
---------------------------
*/

import { ElementBase } from "./base";
import { Theme } from "../../theming";

type HTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

type PropLogicFC<Value> = (propValue: Value, props: { theme: Theme; as?: React.ElementType; } & HTMLProps) => ElementBase.StyleObject;
type PropLogicArr<Value> = Array<{
    value: Value;
    style: ((propValue: Value, props: { theme: Theme; as?: React.ElementType; } & HTMLProps) => ElementBase.StyleObject) | ElementBase.StyleObject;
    default?: boolean;
}>;

export const style = <Value extends any = any>(propLogic: PropLogicFC<Value> | PropLogicArr<Value>): any => propLogic;
