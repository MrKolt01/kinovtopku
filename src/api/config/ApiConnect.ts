import axios from 'axios'

const API_ENDPOINT = 'https://api.themoviedb.org/3/'

export const ApiConnect = axios.create({
  baseURL: API_ENDPOINT,
})
