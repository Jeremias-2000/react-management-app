import axios from 'axios';

const connection = axios.create({
    baseURL: 'https://book-deploy.herokuapp.com/api/v1'
})

export default connection;