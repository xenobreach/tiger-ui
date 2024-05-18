import { createElement } from "@tiger-ui/react";

const Container = createElement('div')({
    style: ({ theme: { breakpoints } }) => ({
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '2rem',
        paddingLeft: '2rem',
    
        [breakpoints.mqMin('sm')]: {
            maxWidth: '460px',
            paddingRight: 0,
            paddingLeft: 0,
        },
        [breakpoints.mqMin('md')]: {
            maxWidth: '614px',
            paddingRight: 0,
            paddingLeft: 0,
        },
        [breakpoints.mqMin('lg')]: {
            maxWidth: '793px',
            paddingRight: 0,
            paddingLeft: 0,
        },
        [breakpoints.mqMin('xl')]: {
            maxWidth: '960px',
            paddingRight: 0,
            paddingLeft: 0,
        },
        [breakpoints.mqMin('xxl')]: {
            maxWidth: '1120px',
            paddingRight: 0,
            paddingLeft: 0,
        },
    }),
});

export default Container;