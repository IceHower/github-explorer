import React, { useState, FormEvent } from 'react';
import githublogo from '../../assets/githublogo.svg';
import  { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi'; // importa o icone da flechinha apontada para direita
import api from '../../services/api'; // Importa a api do services.

// Criamos uma interface para poder definir o tipo do nosso estado de repositories.
interface Repository { 
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
}

const Dashboard: React.FC = () => {
    // Definimos um useState para armazenar os repositorios, e iniciara com o array vazio.
    // Definimos que o tipo desse array é a interface de Repository criada ali em cima.
    const [repositories, setRepositories] = useState<Repository[]>([]); 
    const [newRepo, setNewRepo] = useState('');
    // Aqui definimos que a função vai receber o event, que e do tipo FormEvent que esse por sua vez é do tip HTMLFormElement
    // HTMLFormElement -> Representa o elemento html do form.
    // FormEvent -> Representa o evento de submit do formulario, ou outros eventos que estão atrelados ao formulario.
    async function handleAddRepository(event: FormEvent<HTMLFormElement>) { 
        event.preventDefault(); // Previne o evento padrao que o formulario tem dentro do html, ou seja assim que dar submit a pagina nao recarrega.
        // Adição de um novo Repositorio
        // Consumir a API do Github
        // Salvar o novo repositorio no estado.
        const response = await api.get(`/repos/${newRepo}`);

        setRepositories([...repositories, response.data]);
        setNewRepo('');

    }
    return (
        <div>
            <img src={githublogo} alt='Github Explorer'/>
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                // e = event, no onChange conseguimos acessar o evento, e por consequencia pegar o seu valor.
                onChange={e => setNewRepo(e.target.value)} // Aqui toda vez que o valor do input for trocado ele ira setar no estado que armazena esse valor
                placeholder='Digite o nome do repositório'
                />
                <button>Pesquisar</button>
            </Form>

            {/** Mapea o array de repositories */}
            <Repositories>
            {repositories.map(repository => 
                (
                    <a key={repository.full_name} href="teste">
                        <img 
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight  size={20}/>
                    </a>
                
                )
            )}
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