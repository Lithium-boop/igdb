import { FETCH_GAME, FETCH_GAMES } from '../constants/actionTypes'

const gamesReducer = (state = { game: null }, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return { game: action.payload }

    case FETCH_GAMES:
      return { games: action.payload }

    default:
      return state
  }
}

export default gamesReducer
