import axios from 'axios';

const instance = axios.create({
        baseURL: 'https://yesh-tikva.firebaseio.com/'
    
});

export default instance;