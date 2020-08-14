import axios from 'axios'; // importa o axios.

const api = axios.create({
    baseURL: 'https://api.github.com', // Define a url base da api, aonde podemos nos conectar as rotas
});

export default api;


