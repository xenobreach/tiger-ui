import { Element, createElement } from "@tiger-ui/react";

interface BoxProps extends
  Element.Sizing.Props,
  Element.Display.Props,
  Element.Flexbox.Props,
  Element.Color.Props,
  Element.Spacing.Props
  {}

const Box = createElement('div')<BoxProps>({
  extendedProps: [
    Element.Sizing.props,
    Element.Display.props,
    Element.Flexbox.props,
    Element.Color.props,
    Element.Spacing.props
  ],
});

export default Box;