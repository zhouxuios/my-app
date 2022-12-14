import axios from 'axios'
const baseUrl = 'http://127.0.0.1:80'
const instance = axios.create({
    baseURL:baseUrl,
    timeout:20000
})
instance.interceptors.request.use( conf => {
    const token = localStorage.getItem('my-app-token')
    if(token){
      conf.headers['Authorization'] = token
    }
    return conf
},err => {
    Promise.reject(err)
})
instance.interceptors.response.use(async (res) => {
    return res.data
}, err => {
    return Promise.reject(err)
})
export default instance