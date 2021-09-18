import React from 'react';

import { Container } from './styles';

function CardVideo(props) {
  const { title, desc, imageCard, duration } = props;
  return (
    <Container>
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
