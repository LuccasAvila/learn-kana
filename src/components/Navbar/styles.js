import styled from 'styled-components';

export const Container = styled.div`
  & {
    padding: 24px 0;
  }

  p {
    display: inline-block;
    margin-left: 8px;
    font-size: 1.375rem;
  }

  .logo {
    display: flex;
    align-items: center;
  }
`;

export const Sun = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #cc0000;
`;
