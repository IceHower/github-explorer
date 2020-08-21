import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'; //O useRouteMatch é usado para buscar os dados que foram passado no parametro da rota.
import { Header, RepositoryInfo, Issues } from './styles'
import  logoImg from '../../assets/githublogo.svg';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch();

    return (
        <>
        <Header>
            <img src={logoImg} />
            <Link to='/'>
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>
        <RepositoryInfo>
            <header>
                <img src='' alt='imagem de perfil' />
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Descrição do repositorio</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>46</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues</span>
                </li>
            </ul>
        </RepositoryInfo>
        <Issues>
            <Link to={``}>
                <div>
                    <strong> AAAA </strong>
                    <p> BBBB </p>
                </div>
                <FiChevronRight size={20}/>
            </Link>
        </Issues>
        </>
    );
}

export default Repository;