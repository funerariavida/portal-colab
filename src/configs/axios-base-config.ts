import axios from 'axios'

export const baseURL = 'https://n8n.empresavida.com.br/webhook/bea2eed4-5182-4597-b1b5-f58ae937a03f/v3/portal/'

export const axiosInstance = axios.create({
  baseURL: baseURL,
  validateStatus: (status) => {
    return status >= 200 && status <= 304
  }
})