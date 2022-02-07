import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Heading } from '../components/heading';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 9.8rem);
`;

export default function AdminPage() {
  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (!isBrowser) return null;
    if (isBrowser) {
      navigate('https://lesnaolejarnia.sanity.studio/desk', { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Wrapper>
        <Heading>Jesteś przenoszony na stronę swojego dostawcy treści!</Heading>
      </Wrapper>
    </Layout>
  );
}
