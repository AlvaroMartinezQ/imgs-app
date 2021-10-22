import axios from 'axios'

const NASA_apod = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 120000
})

NASA_apod.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default NASA_apod
