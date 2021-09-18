import React from 'react';
import { IoIosLogOut } from 'react-icons/io';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <p>
          Venture
          <span>Class</span>
        </p>
        <a href="/">
          <span>Sair do app</span>
          <IoIosLogOut size={25} />
        </a>
      </Content>
    </Container>
  );
}

export default Header;
