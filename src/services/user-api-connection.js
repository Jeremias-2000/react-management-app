import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://localhost:8080/api/v1/'
})

export default connection;