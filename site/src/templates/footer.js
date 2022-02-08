import React from 'react';
import { GreenBackground } from '../components/greenBackground';
import { Paragraph } from '../components/paragraph';

export default function Footer() {
  return (
    <footer>
      <GreenBackground>
        <Paragraph className="paragraph">
          Strona wykonana z <span className="icon">❤️ </span>
          przez <a href="https://dlwebdev.com">dlwebdev.com</a>
        </Paragraph>
      </GreenBackground>
    </footer>
  );
}
