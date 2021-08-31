import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchGame = (id) => API.get(`/games/${id}`)
export const fetchGames = (limit) => API.get(`/games?limit=${limit}`)
