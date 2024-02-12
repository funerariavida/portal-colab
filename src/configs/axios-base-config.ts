import axios from 'axios'

export const baseURL = process.env.API_BASE_URL

export const axiosInstance = axios.create({
  baseURL,
  validateStatus: (status) => {
    return status >= 200 && status <= 304
  },
})
