import { FETCH_GAMES } from '../actions/types';

export default function gamesReducer(state = null, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return action.games;
    default:
      return state;
  }
}
