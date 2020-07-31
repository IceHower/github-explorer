import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
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