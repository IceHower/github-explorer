import styled from 'styled-components';
import { shade } from 'polished'; // Importa o sombreamento da biblioteca polished.

export const Header  = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #666;
        transition: color 0.2s;

        &:hover {
            color: #000;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;          
        }

        div {
            margin-left: 24px;
            
            strong {
                font-size: 36px;
                color: #3d3d4d
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }

    }
    ul {
            display: flex;
            list-style: none;
            margin-top: 40px;
        

            li {
                & + li {
                    margin-left: 80px;
                }
                strong {
                    display: block;
                    font-size: 36px;
                    color: #3d3d4d;
                }

                span {
                    display: block;
                    margin-top: 4px;
                    color: #6c6c80;
                }
            }
        }

`;

export const Issues = styled.div`
    margin-top: 80px;

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
