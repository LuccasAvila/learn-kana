import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  ul {
    width: 100%;
    text-align: center;
    list-style-type: none;
    li {
      color: #bc002d;
      font-weight: normal;
      transition: text-shadow 0.3s;

      &:hover {
        cursor: pointer;
        text-shadow: 0 0 0.3px #bc002d, 0 0 0.3px #bc002d, 0 0 0.3px #bc002d;
      }
    }
  }
`;
