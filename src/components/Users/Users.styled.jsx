import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
`;

export const LoadMoreButton = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: white;
  display: flex;
  justify-content: center;
  min-width: 196px;
  margin: 40px auto 0;
  padding: 14px 39px;

  border-radius: 10px;
  border: none;
  cursor: pointer;

  background-image: linear-gradient(
    114.99deg,
    rgb(71, 28, 169) -0.99%,
    rgb(87, 54, 163) 54.28%,
    rgb(75, 42, 153) 78.99%
  );
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
`;
