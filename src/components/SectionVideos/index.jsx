import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { Container } from './styles';

/**
 * component que recebe a listagem de todos os videos
 */

function SectionVideos({ children }) {
  return (
    <Container>
      <ScrollContainer className="scroll-container">{children}</ScrollContainer>
    </Container>
  );
}

export default SectionVideos;
