import axios from 'axios'

export const baseURL = 'https://n8n.empresavida.com.br/webhook/v2/auth/portal'

export const axiosInstance = axios.create({
  baseURL: baseURL,
  validateStatus: (status) => {
    return status >= 200 && status <= 304
  }
})