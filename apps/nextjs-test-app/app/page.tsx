'use client';

import React from 'react';
import Link from 'next/link';
import { createElement } from '@tiger-ui/react';

// Components
import Box from '../components/Box';
import Container from '../components/Container';
import H1 from '../components/H1';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const Content = createElement('div')({
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem',
    height: '100vh'
  },
  Children: (props) => {
    const { theme: { colors } } = props;

    return (
      <>
        <Box display="flex" alignItems="center" gap={1.5}>
          <img
            src="/svg/tiger-ui-logo.svg"
            alt="Tiger UI Logo"
            width={100}
            draggable={false}
          />
          <H1 cssx={{ fontWeight: 400, color: '#ffffff' }}>
            <b style={{ color: colors.base.primary.main }}>Tiger UI</b> Next JS Test App
          </H1>
        </Box>
        <Paragraph color={colors.grey[400]} cssx={{ textAlign: 'center', maxWidth: '800px' }}>
          Welcome to <b style={{ color: colors.base.primary.main }}>Tiger UI</b> Next JS Test App!
          Here you can test the packages available on monorepo.
          You can review the documentation by going to the link below.
        </Paragraph>
        <Box>
          <Link href="https://github.com/xenobreach/tiger-ui/tree/master/packages/tiger-ui-react" target="_blank">
            <Button variant="outlined">View Docs</Button>
          </Link>
        </Box>
      </>
    );
  }
});

export default function Page(): JSX.Element {
  return (
    <Container>
      <Content />
    </Container>
  );
}