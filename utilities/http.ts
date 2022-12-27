import axios from 'axios'

const http = axios.create({
    baseURL: process.env.SERVER_URI
})

http.interceptors.request.use((config) => {
    return {
        withCredentials: true,
        ...config
    }
})

export default http
