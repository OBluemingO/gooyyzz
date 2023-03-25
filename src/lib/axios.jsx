import axios from 'axios'

const customInstance = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
})

// ? NOTE: catch require before send request resource from server 
customInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config
  }
  return config
})

export default customInstance
