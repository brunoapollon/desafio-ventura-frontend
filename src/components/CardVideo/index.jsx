import React from 'react';

import { Container } from './styles';

/**
 * component de card que é uma previa do video que sera exibido ao ser clicado
 */

function CardVideo(props) {
  const { title, desc, imageCard, duration } = props;
  return (
    <Container {...props}>
      <img src={imageCard} alt="thumb" />
      <div>
        <div>
          <h3>{title}</h3>
          <span>{duration}</span>
        </div>
        <p>{desc}</p>
      </div>
    </Container>
  );
}

export default CardVideo;
