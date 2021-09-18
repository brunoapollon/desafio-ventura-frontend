import React from 'react';

import { Container, Content } from './styles';

import landingImage from '../../assets/landingImage.png';

function LandingPage() {
  return (
    <Container>
      <Content>
        <header>
          <p>
            Venture
            <span>Class</span>
          </p>
        </header>
        <section>
          <div>
            <h1>
              Educação que
              <span> transforma</span>
            </h1>
            <p>
              Alunos de todo o mundo estão iniciando novas carreiras e avançando
              em suas áreas.
            </p>
            <a href="/training">INICIAR TREINAMENTO</a>
          </div>
          <div>
            <img src={landingImage} alt="background" />
          </div>
        </section>
      </Content>
    </Container>
  );
}

export default LandingPage;
