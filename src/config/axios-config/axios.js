import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://covid19.devtest.ge/api/'
})

export default axiosInstance
