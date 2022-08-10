import styled from 'styled-components';

export const PokeContainer = styled.div`
   h2{
      padding: 10px;
      margin:0px 0px 0px 10px; 
   }

`

export const Header = styled.div`
   display: flex;
   justify-content: end;
   align-itens: center;
   padding: 10px;
`

export const Grid = styled.div`

   display: grid;
   gap: 10px;
   grid-template-columns: repeat(3,1fr);
`