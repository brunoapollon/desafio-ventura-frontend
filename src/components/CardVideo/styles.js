import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: max-content;
  display: flex;
  background: transparent;
  border: none;
  padding: 5px;
  box-sizing: border-box;
  > img {
    height: 56px;
    width: 82px;
    border-radius: 5px;
  }
  > div {
    margin-left: 16px;
    flex: 1;
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
      text-align: left;
      overflow: hidden;
    }
  }
  & + button {
    margin-top: 24px;
  }
  &:hover {
    box-shadow: 0 0 5px #222;
  }
`;
