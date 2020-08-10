import {createGlobalStyle} from 'styled-components';
import githubBackground from '../assets/githubBackground.svg';

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        /** Define a cor do background, a imagen de fundo, joga ela 70% para a direita e alinha com o topo.*/ 
        background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased; /** Deixa a font mais bonita menos sharp, mas só funciona no goole.*/ 
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin:0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
 
`;