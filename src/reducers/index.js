import { combineReducers } from 'redux';
import games from './gamesReducers.js';

export default combineReducers({
    games: games
});
