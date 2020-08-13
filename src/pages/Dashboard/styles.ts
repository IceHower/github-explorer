import styled from 'styled-components';
import { shade } from 'polished'; // Importa o sombreamento da biblioteca polished

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width:450px;
    line-height:56px;

    margin-top: 80px;

`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px; 
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }

    }

    button {
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        /** quando usa o & se refere ao proprio elemento que ele esta encadeado.
            então nesse caso seria o button.

            Poderiamos escurecer a cor manualmente no hover, porem vamos utilizar uma biblioteca 
            chamada polished -- desenvolvida pelo mesmo time do styled-components (yarn add polished)
         */
        &:hover {
            transition: 0.5s;
            background: ${shade(0.3, '#04D361')}
        }
    }


`;

export const Repositories = styled.div`

`;
