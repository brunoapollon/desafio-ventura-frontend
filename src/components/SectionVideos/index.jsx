import React from 'react';

import { Container } from './styles';

/**
 * component que recebe a listagem de todos os videos
 */

function SectionVideos({ children }) {
  return <Container>{children}</Container>;
}

export default SectionVideos;
