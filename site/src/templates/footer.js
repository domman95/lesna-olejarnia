import React from 'react';
import { Paragraph } from '../components/paragraph';
import { StyledGreenBackground } from '../components/proofs';

export default function Footer() {
  return (
    <StyledGreenBackground>
      <Paragraph className="paragraph">
        Strona wykonana z <span className="icon">❤️ </span>
        przez <a href="https://dlwebdev">dlwebdev.com</a>
      </Paragraph>
    </StyledGreenBackground>
  );
}
