import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #2d46b9;
  padding-top: 64px;
`;

export const Content = styled.div`
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  > header {
    width: 100%;
    height: 25px;
    > p {
      color: #fff;
      font-family: 'Comfortaa', cursive;
      font-weight: lighter;
      margin: 0;
      > span {
        color: #f9a528;
      }
    }
  }
  > section {
    display: flex;
    height: 100%;
    > div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      > h1 {
        font-size: 56px;
        color: #fff;
        margin: 0;
        font-weight: lighter;
        > span {
          color: #f9a528;
          font-weight: bold;
        }
      }
      > p {
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        margin: 25px 0 50px 0;
      }
      > a {
        width: 395px;
        height: 60px;
        background-color: #f9a528;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        border-radius: 5px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:nth-child(2) {
        align-items: center;
      }
    }
  }
`;
