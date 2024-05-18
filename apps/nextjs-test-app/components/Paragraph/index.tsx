import { createElement } from "@tiger-ui/react";

interface ParagraphProps {
  color?: string;
}

const Paragraph = createElement('p')<ParagraphProps>({
  props: {
    color: (propValue) => ({
      color: propValue,
    }),
  },
});

export default Paragraph;