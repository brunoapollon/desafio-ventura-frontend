import React, { useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header';
import FeturedVideo from '../../components/FeturedVideo';
import SectionVideos from '../../components/SectionVideos';
import CardVideo from '../../components/CardVideo';

import { Container, Content } from './styles';

import api from '../../services/api';

function Training() {
  const [response, setResponse] = useState([]);
  const [videoPlay, setVideoPlay] = useState(null);

  useEffect(() => {
    (async function requestApi() {
      await api.get('video/').then(promise => {
        setResponse(promise.data);
        setVideoPlay(promise.data[0]);
      });
    })();
  }, []);

  const handleChangeVideo = useCallback(video => {
    setVideoPlay(video);
  });

  return (
    <Container>
      <Header />
      <Content>
        <div>
          {response.length !== 0 && (
            <FeturedVideo video={videoPlay} start={false} />
          )}
        </div>
        <SectionVideos>
          {response &&
            response.length !== 0 &&
            response.map(video => (
              <CardVideo
                key={video.id}
                title={video.title}
                desc={video.description}
                imageCard={video.urlThumbnail}
                duration="5:00"
                onClick={() => {
                  handleChangeVideo(video);
                }}
              />
            ))}
        </SectionVideos>
      </Content>
    </Container>
  );
}

export default Training;
