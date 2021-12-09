import axios from 'axios';
import { sessionID } from '../context/session'

const service = axios.create({
    timeout: 5000
})

service.interceptors.request.use(config => {
    // 这里加一层判断
    config.headers = {session_id: sessionID};
    return config;
}, error => {
    console.log('axios error, requir session_id')
})

export default service