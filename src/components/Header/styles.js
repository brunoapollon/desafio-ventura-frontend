import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;

  background: #2d46b9;
`;

export const Content = styled.div`
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    color: #fff;
    font-size: 16px;
    font-family: 'Comfortaa', cursive;
    font-weight: lighter;
    > span {
      color: #f9a528;
    }
  }
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    > span {
      color: #fff;
      font-size: 16px;
    }
    > svg {
      fill: #f9a528;
      margin-left: 15px;
    }
  }
`;
