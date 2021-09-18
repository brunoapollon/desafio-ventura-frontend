import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  > img {
    height: 56px;
    width: 82px;
    border-radius: 5px;
  }
  > div {
    margin-left: 16px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > h3 {
        font-size: 16px;
        margin: 0;
      }
      > span {
        font-size: 16px;
        font-weight: bold;
      }
    }
    > p {
      font-size: 10px;
      color: #222;
    }
  }
  & + div {
    margin-top: 24px;
  }
`;
