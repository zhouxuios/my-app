import axios from './index'
export const login = params => axios.post('/api/login',params)
export const regist = params => axios.post('/api/regist',params)