import React, { useCallback, useState, useEffect } from 'react';
import { IoPlayOutline } from 'react-icons/io5';

import VideoComponent from '../VideoComponent';

import { Container } from './styles';

function feturedVideo(props) {
  const { video, start } = props;
  const [handlePlay, setHandlePlay] = useState(start);

  useEffect(() => {
    setHandlePlay(start);
  }, [video]);

  const handlePlayVideo = useCallback(() => {
    setHandlePlay(!handlePlay);
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
      {handlePlay && video && <VideoComponent url={video.url} />}
      {video && (
        <>
          <h1>{video.title}</h1>
          <p>{video.description}</p>
        </>
      )}
    </Container>
  );
}

export default feturedVideo;
