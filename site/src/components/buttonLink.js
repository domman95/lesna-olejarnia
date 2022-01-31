import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Arrow } from './arrow';

export default function ButtonLink({ children, link = '/' }) {
  return (
    <Link className="buttonLink" to={link}>
      {children} <Arrow />
    </Link>
  );
}
