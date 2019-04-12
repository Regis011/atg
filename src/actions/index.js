import { FETCH_GAMES } from './types';
import axios from 'axios';

export const fetchGames = (games) => {
  return {
    type: FETCH_GAMES,
    games
  }
};

export const fetchAllGames = () => {
  return (dispatch) => {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const url = "https://www.atg.se/services/racinginfo/v1/api/products/V75";
    const v75 = axios.get(proxyurl + url)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log('error', error)
      });

    const v65 =  axios.get(proxyurl + `https://www.atg.se/services/racinginfo/v1/api/products/V65`)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log('error', error)
      });

    const v64 =  axios.get(proxyurl + `https://www.atg.se/services/racinginfo/v1/api/products/V64`)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log('error', error)
      });

    const v4 =  axios.get(proxyurl + `https://www.atg.se/services/racinginfo/v1/api/products/V4`)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log('error', error)
      });

    let res = {
      'v75': v75,
      'v65': v65,
      'v64': v64,
      'v4':  v4,
    };

    return dispatch(fetchGames(res));

  };
};
