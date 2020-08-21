import React, { useState, FormEvent, useEffect } from 'react';
import githublogo from '../../assets/githublogo.svg';
import  { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi'; // importa o icone da flechinha apontada para direita
import api from '../../services/api'; // Importa a api do services.
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom.

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
    // O codigo abaixo inicializa o estado com os dados salvos no localStorage
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if(storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            return [];
        }
            
        
    }); 
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setNewInputError] = useState('');
    // Aqui definimos que a função vai receber o event, que e do tipo FormEvent que esse por sua vez é do tip HTMLFormElement
    // HTMLFormElement -> Representa o elemento html do form.
    // FormEvent -> Representa o evento de submit do formulario, ou outros eventos que estão atrelados ao formulario.
    function clearError() {
        setNewInputError('');
    }
    // Vai salvar no localStorage as informações do estado toda vez que o repositories for atualizado.
    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);
    async function handleAddRepository(event: FormEvent<HTMLFormElement>) { 
        event.preventDefault(); // Previne o evento padrao que o formulario tem dentro do html, ou seja assim que dar submit a pagina nao recarrega.
        if(newRepo === '') {
            setNewInputError('Digite o autor/nome do repositório');
            setTimeout(clearError, 3000);
            return;
        }
        try {
            const response = await api.get(`/repos/${newRepo}`);

            setRepositories([...repositories, response.data]);
            setNewRepo(''); // Faz limpar o valor do input ao final;
        } catch(err) {
            setNewInputError('Repositório não existe');
            setTimeout(clearError, 3000);
            
        }
       
    }

    return (
        <div>
            <img src={githublogo} alt='Github Explorer'/>
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!! inputError} onSubmit={handleAddRepository}>
                <input
                // !! = estamos negando a negação, para podermos utilizar do truthy ou falsy do JS.
                // Truthy = a variavel contem alguma coisa || Falsy = a variavel está vazia.
                // Utilizando os 2 sinais de exclamação, estamos querendo verificar se a variavel contem algo, e caso ela contenha vamos aplicar o css.
                // e = event, no onChange conseguimos acessar o evento, e por consequencia pegar o seu valor.
                onChange={e => setNewRepo(e.target.value)} // Aqui toda vez que o valor do input for trocado ele ira setar no estado que armazena esse valor
                placeholder='Digite o nome do repositório'
                />
                <button>Pesquisar</button>
            </Form>
               { inputError && <Error> {inputError} </Error> 
               /** Esse é um tipo de if que a segunda parte só sera executada caso a primeira seja satisfeita
                * Que no caso é verificar se o inputError tem algum valor
                */}
            {/** Mapea o array de repositories */}
            <Repositories>
            {repositories.map(repository => 
                (
                    <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
                        <img 
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight  size={20}/>
                    </Link>
                
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