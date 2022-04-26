import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 50px auto;
  padding: 0;

  .searchInput {
    width: 280px;
    margin-right: 25px;
    padding: 0;
  }

  .searchButton {
    width: auto;
    height: 55px;
    font-weight: 500;
  }
`;
