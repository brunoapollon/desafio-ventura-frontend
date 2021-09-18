import React from 'react';

import Header from '../../components/Header';
import FeturedVideo from '../../components/FeturedVideo';

import ImageTest from '../../assets/imageTest.png';

import { Container, Content } from './styles';

function Training() {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          {ImageTest && (
            <FeturedVideo
              image={ImageTest}
              desc="Nam finibus nibh eget elit pulvinar, mattis sagittis enim finibus. Pellentesque ultricies augue id magna semper dignissim. Fusce at augue blandit, vulputate nisl nec, aliquam metus. Ut lacinia accumsan diam."
              title="Introdução"
            />
          )}
        </div>
      </Content>
    </Container>
  );
}

export default Training;
