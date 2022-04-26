import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  position: relative;

  .addFavIcon {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 9999;
    width: 30px;
    height: 30px;
    background-color: #ffe204;
    color: white;
    border-radius: 20px;
    :hover {
      background-color: #fff;
    }
  }
`;

export const WeatherCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherCondition = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export const WeatherInfos = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  max-width: 345px;
  margin-top: 15px;
  gap: 10px;

  .info {
    font-size: 18px;
    font-weight: 500;
  }
`;
