import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:1337',
  timeout: 1000
})
