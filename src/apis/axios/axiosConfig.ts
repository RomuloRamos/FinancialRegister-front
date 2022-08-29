import axios from 'axios';

export default axios.create({
    timeout:1000,
    baseURL:'http://localhost:4001'
});