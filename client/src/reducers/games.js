import { FETCH_GAME, FETCH_GAMES } from '../constants/actionTypes'

const gamesReducer = (state = { games: null, game: null }, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return { ...state, game: action.payload }

    case FETCH_GAMES:
      return { ...state, games: action.payload }

    default:
      return state
  }
}

export default gamesReducer
