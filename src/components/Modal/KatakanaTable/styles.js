import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 32px;
  border-collapse: collapse;
  font-size: 2rem;
  text-align: center;
  td {
    width: 48px;
  }

  th {
    border-bottom: 2px solid #bc002d;
  }

  th:nth-child(2n + 1),
  td:nth-child(2n + 1) {
    background: #f1f1f1;
  }
`;
