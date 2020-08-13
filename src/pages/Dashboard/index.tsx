import React from 'react';
import githublogo from '../../assets/githublogo.svg';
import  { Title, Form, Repositories } from './styles';

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
                <a href="teste"></a>
            </Repositories>
        </div>
    )
}
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