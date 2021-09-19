import React from 'react';

import CardVideo from '../CardVideo';

// import ImageTest from '../../assets/imageTest.png';

import { Container } from './styles';

function SectionVideos(props) {
  const { data } = props;

  return (
    <Container>
      {data.length !== 0 &&
        data.map(video => (
          <CardVideo
            title={video.title}
            desc={video.description}
            imageCard={video.urlThumbnail}
            duration="5:00"
          />
        ))}
    </Container>
  );
}

export default SectionVideos;
