import { FETCH_GAME, FETCH_GAMES } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getGame = (id) => async (dispatch) => {
  try {
    const {
      data: { name, summary, coverUrl },
    } = await api.fetchGame(id)

    dispatch({ type: FETCH_GAME, payload: { name, summary, coverUrl } })
  } catch (error) {
    console.log(error)
  }
}

export const getGames = (limit, searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.fetchGames(limit, searchQuery)

    dispatch({ type: FETCH_GAMES, payload: { data } })
  } catch (error) {
    console.log(error)
  }
}
