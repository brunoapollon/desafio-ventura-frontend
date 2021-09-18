import React from 'react';

import CardVideo from '../CardVideo';

import ImageTest from '../../assets/imageTest.png';

import { Container } from './styles';

function SectionVideos() {
  return (
    <Container>
      <CardVideo
        title="Introdução"
        desc="Nam finibus nibh eget elit pulvinar, mattis sagittis enim finibus. Pellentesque ultricies augue id magna semper dignissi..."
        imageCard={ImageTest}
        duration="5:00"
      />
      <CardVideo
        title="Introdução"
        desc="Nam finibus nibh eget elit pulvinar, mattis sagittis enim finibus. Pellentesque ultricies augue id magna semper dignissi..."
        imageCard={ImageTest}
        duration="5:00"
      />
      <CardVideo
        title="Introdução"
        desc="Nam finibus nibh eget elit pulvinar, mattis sagittis enim finibus. Pellentesque ultricies augue id magna semper dignissi..."
        imageCard={ImageTest}
        duration="5:00"
      />
    </Container>
  );
}

export default SectionVideos;
