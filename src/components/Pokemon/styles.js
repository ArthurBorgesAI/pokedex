import styled from 'styled-components';

export const PokeCard = styled.div`
    display: flex;
    box-shadow: 4px 4px 4px (0,0,0,0.25);
    border-radius: 3px;

`


export const PokeImgContainer = styled.div`
    padding: 0px 5px;

    img{
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }
`


export const CardBody = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 10px 10px 0px;
    flex: 1;

    .card-top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-itens: center;

        h3{
            text-transform: capitalize;
        }
        h4{
            font-weight:normal;
        }
    }

    .card-bottom{
        display: flex;
        flex-direction: row;
        align-itens: center;
        justify-content: space-between;
    }

    .pokemon-type{
        display: flex;
    }

    .pokemon-type-text{
        margin-right: 10px;
        text-transform: capitalize;
    }


`



