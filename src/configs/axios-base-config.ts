import axios from 'axios'

export const baseURL = process.env.NEXT_PUBLIC_NODE_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL,
  validateStatus: (status) => {
    return status >= 200 && status <= 304
  },
})
