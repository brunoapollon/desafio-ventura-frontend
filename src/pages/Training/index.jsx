import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import FeturedVideo from '../../components/FeturedVideo';
import SectionVideos from '../../components/SectionVideos';

import { Container, Content } from './styles';

import api from '../../services/api';

function Training() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    (async function requestApi() {
      await api.get('video/').then(promise => {
        setResponse(promise.data);
      });
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          {response.length !== 0 && (
            <FeturedVideo
              image={response[0].urlThumbnail}
              desc={response[0].description}
              title={response[0].title}
              playVideo={false}
              url={response[0].url}
            />
          )}
        </div>
        <SectionVideos data={response} />
      </Content>
    </Container>
  );
}

export default Training;
