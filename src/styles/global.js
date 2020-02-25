import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: 'Noto Sans', sans-serif;
    }
`;

export const AppContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`;
