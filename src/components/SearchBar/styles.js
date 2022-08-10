import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0px auto;
    padding: 0 20px;
    align-itens: center;
`

export const SearchBar = styled.div`
    background: white;
    margin-right: 20px;

    input{
        padding: 10px;
        box-shadow: 0px 2px 2px (0,0,0,0.25);
        border-radius: 3px;
        border: none;
    }

    button{
        background: #0e6f9f;
        border: none;
        border-radius: 10px;
        geight: 44px;
        color: white;
        padding: 10px 12px;
    }
`