const axios = require('axios');

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
})

export default api;