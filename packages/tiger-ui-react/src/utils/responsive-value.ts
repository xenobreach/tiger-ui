import { Breakpoint } from "../theming";

export type ResponsiveValue<T> = Partial<Record<Breakpoint, T>>;