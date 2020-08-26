import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'; //O useRouteMatch é usado para buscar os dados que foram passado no parametro da rota.
import { Header, RepositoryInfo, Issues } from './styles'
import  logoImg from '../../assets/githublogo.svg';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import  api  from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    open_issues_count: number;
    forks_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    id: string;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    // Quando nossos estados nao forem um valor primitivo Ex: number, string, boolean. Devemos tipalos, ou seja criar uma interface para especificar o que é.
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        // Busca os dados Do repositorio
        api.get(`repos/${params.repository}`).then( response => {
            setRepository(response.data);
        });

        // Busca os dados Das Issues do repositorio

        api.get(`repos/${params.repository}/issues`).then( response => {
            setIssues(response.data);
        });

        // OU PODE SE UTILIZAR O Promise.all([request1, request2, requestN]); Para se fazer as chamadas ao mesmo tempo.
        /**
         *      const [repository, issues] = await Promise.all([
         *          api.get(`repos/${params.repository}`),
         *          api.get(`repos/${params.repository/issues}`),
         *      ]);
         * 
         *      console.log(repository);
         *      console.log(issues);
         * 
         *  E AI NESSE CASO response44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444 Seria um Array, e Na Posiçao 0 estaria os repository e na posição 1 estaria os issues.
         * 
         * 
         */
    }, [params.repository]);

    return (
        <>
        <Header>
            <img src={logoImg} />
            <Link to='/'>
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>
        {repository && (
        <RepositoryInfo>
        <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
            </div>
        </header>
        <ul>
            <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
            </li>
            <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
            </li>
            <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues</span>
            </li>
        </ul>
        </RepositoryInfo>)
    }
        <Issues>
            {issues.map(issue => (
            <a key={issue.id} target="_blank" href={issue.html_url}>
                <div>
                    <strong> {issue.title} </strong>
                    <p> {issue.user.login} </p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            ))}
        </Issues>
        </>
    );
}

export default Repository;