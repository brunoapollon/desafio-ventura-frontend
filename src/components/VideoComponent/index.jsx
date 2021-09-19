import React from 'react';

import { Container } from './styles';

function Video({ url }) {
  return (
    <Container>
      <video src={url} autoPlay width="600" controls>
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
        <track
          src="captions_es.vtt"
          kind="captions"
          srcLang="es"
          label="spanish_captions"
        />
      </video>
      )
    </Container>
  );
}

export default Video;
