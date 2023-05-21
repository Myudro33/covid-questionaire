import axiosInstance from '../config/axios-config/axios.js'

export function sendResponse(data) {
  return axiosInstance.post('/create', data)
}
