import React, { useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header';
import FeturedVideo from '../../components/FeturedVideo';
import SectionVideos from '../../components/SectionVideos';
import CardVideo from '../../components/CardVideo';

import { Container, Content } from './styles';

import api from '../../services/api';

/**
 * página  de training que lista e reproduz os videos
 * foi feita uma componentização de diversos elementos separando a lógica deles
 * assim como códigos e estilização
 * nessa página  fica a requisição principal dentro de um useEffect para
 * evitar diversas execuções  e foi aplixado useStats tanto para dados quanto para
 * o controle do que é reproduzido na tela.
 * o useCallback foi utilizado para evitar diversas criações da mesma função
 */

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
                duration={video.duration}
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
