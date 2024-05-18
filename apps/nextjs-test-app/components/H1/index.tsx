import { createElement } from "@tiger-ui/react";

const H1 = createElement('h1')({
  style: {
    xs: {
      fontSize: '23px',
    },
    md: {
      fontSize: '27px',
    },
    xl: {
      fontSize: '32px',
    }
  },
});

export default H1;