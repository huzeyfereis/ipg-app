import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 50px auto;
  .favCitiesTitle {
    font-size: 30px;
    line-height: 40px;
    font-weight: 500;
    color: #003063;
    margin: 35px 0;
  }
`;

export const FavoriteCities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(345px, 2fr));
  gap: 20px;
`;
