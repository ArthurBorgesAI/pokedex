import styled from "styled-components";

export const Header = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  h1{
    color: #F2BD1D;
    text-shadow: -2px -2px 0 #3868A6, 2px -2px 0 #3868A6, -2px 2px 0 #3868A6, 2px 2px 0 #3868A6;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 0px 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PokeContainer = styled.div`
  top: 785px;
  color: white;
  margin-top: 15px;
`;
