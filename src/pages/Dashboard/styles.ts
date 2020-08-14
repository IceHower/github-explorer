import styled from 'styled-components';
import { shade } from 'polished'; // Importa o sombreamento da biblioteca polished.


export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
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
    margin-top: 80px;
    max-width: 700px;

    a{
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        /** Toda vez que você quiser aplicar um css em css que são precendidos por determinado elemento , 
        podemos utilizar essa sintaxe. Lembrando que no exemplo abaixo o & comercial representa o elemento "pai" do encadeamento.

        Concluindo, ele so irá aplicar o css abaixo se o elemento a for precendido de outro elemento a.
        */
        & + a { 
            margin-top: 16px;
        }
    }

    

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%; /** Utilizar 50% de border radius quando eu quiser que uma imagem fique 100% arrendondada */
    }
    div {
        margin: 0 16px;
        flex: 1; /** Faz a div só utilizar o espaço disponivel */
        strong {
            font-size: 20px;
            color: #3D3D4D;
        }
        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
        }

    }

    svg {
        margin-left: auto; /** Vai pegar todo o espaço disponivel na esquerda e aplicar, ou seja vai colocar praticamente no final do elemento. */
        color: #CBCBD6;

        &:hover {
            transition: 0.5s;
            transform: translateX(10px);
            color: ${shade(0.3, '#CBCBD6')};
        }
    }


`;
