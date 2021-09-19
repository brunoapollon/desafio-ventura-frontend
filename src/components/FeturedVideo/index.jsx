import React, { useCallback, useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';

import { Container } from './styles';

function feturedVideo(props) {
  const { desc, title, playVideo, url } = props;
  const [handlePlay, setHandlePlay] = useState(playVideo);

  const handlePlayVideo = useCallback(() => {
    setHandlePlay(true);
  });

  return (
    <Container {...props}>
      {!handlePlay && (
        <div className="thumb" {...props}>
          <button
            type="button"
            onClick={() => {
              handlePlayVideo();
            }}
          >
            <IoPlayOutline size={25} />
          </button>
        </div>
      )}
      {handlePlay && url && (
        <video autoPlay width="600" controls>
          <source src={url} type="video/mp4" />
          <source src={url} type="video/ogg" />
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
      )}
      <h1>{title}</h1>
      <p>{desc}</p>
    </Container>
  );
}

export default feturedVideo;
