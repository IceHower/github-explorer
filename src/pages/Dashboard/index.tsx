import React, { useState } from 'react';
import githublogo from '../../assets/githublogo.svg';
import  { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi'; // importa o icone da flechinha apontada para direita
import api from '../../services/api'; // Importa a api do services

const Dashboard: React.FC = () => {
    return (
        <div>
            <img src={githublogo} alt='Github Explorer'/>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder='Digite o nome do repositório'/>
                <button>Pesquisar</button>
            </Form>
            
            <Repositories>
                <a href="teste">
                    <img src={'teste'}></img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Está é a descrição do repositório</p>
                    </div>
                    <FiChevronRight  size={20}/>
                </a>
            </Repositories>
        </div>
    )
}
/**
 * Dica para saber quando usar div:
 * - Verificar o alinhamento dos items. Ex: a imagem esta alinhada com o titulo e a descrição no eixo horizontal, 
 *   mas o titulo e a descrição estão alinhados pelo eixo vertical, então iremos utilizar uma div e colocar dentro dela o titulo e a descrição
 *   pois o alinhamento está diferente do "flow" principal dos items.
 *   Então "toda vez" que trocar o eixo do alinhamento quer dizer que vai ter que utilizar um container a mais para conseguir fazer a estilização.
 */

/**
 * O codigo acima é a mesma coisa que este aqui:
 * 
 * function Dashboard () {
 *  conteudo
 * 
 * }
 * 
 * export default Dashboard;
 * 
 * 
 * Porém, como estamos usando o typescript é mais facil para tipar escrevendo em formato de constante.
 * 
 * Obs: Definimos a tipagem como React.FunctionComponent --> Que abreviando fica React.FC
 * 
 * Podemos escrever os componentes em forma de classe tambem, porém hoje em dia não é mais utilizado.
 */

export default Dashboard;