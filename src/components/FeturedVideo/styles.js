import styled from 'styled-components';

export const Container = styled.div`
  width: 650px;
  height: 580px;
  margin-top: 32px;
  .thumb {
    width: 100%;
    height: 430px;
    background: url(${props => props.image}) no-repeat center;
    display: flex;
    justify-content: center;
    align-items: center;
    > button {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: none;
      background: #2d46b9;
      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        stroke: #fff;
      }
    }
  }
  > h1 {
    font-size: 24px;
    margin: 32px 0 16px 0;
  }
  > p {
    font-size: 16px;
    color: #222;
  }
`;
