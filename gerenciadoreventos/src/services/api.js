import axios from 'axios';

const api = axios.create( { baseURL: 'https://api-gerenciador-eventos.herokuapp.com/'});

export default api;