import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';

import './GameSchedule.css';


class GameSchedule extends Component {

 constructor(props){
   super(props)

   this.state = {
     openGame: []
   }

   this.handleClick = this.handleClick.bind(this);

 }

 handleClick(e){
    console.log('click');
    console.log(e.target.id);
    //const id = e.target.id;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = `https://www.atg.se/services/racinginfo/v1/api/games/${id}`;
    // const res = axios.get(proxyurl + url)
    //   .then(function (response) {
    //     return response.data;
    //   })
    //   .catch(function (error) {
    //     console.log('error', error)
    //   });

    //this.setState({openGame: res});
  }

  render() {

    const { data } = this.props;
    const name = data[0] ? data[0].name : '';
    const upcoming = data[0] ? data[0].data.upcoming : '';
    const results = data[0] ? data[0].data.results : '';

    const listUpcoming = upcoming.map((item, idx) => {
      const dateToFormat = item.startTime;
      const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>;
      return <li key={idx}>Plats: {item.tracks[0].name}, Börja: {date} <button id={item.id} onClick={this.handleClick}>Läs mer</button></li>
    })

    const listResults = results.map((item, idx) => {
      const dateToFormat = item.startTime;
      const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>;
      return <li key={idx} >Plats: {item.tracks[0].name}, Börja: {date} <button id={item.id} onClick={this.handleClick}>Läs mer</button></li>
    })

    console.log(results);

    return (
      <div className="game_schedule">
        <h2>Spel Information</h2>
        <div>{name}</div>
        <div className="game_schedule_in">
          <h3>Kommande spel</h3>
          <ul>
           {listUpcoming}
          </ul>
          <div>
          </div>
          <h3>Resultat</h3>
          <ul>
            {listResults}
          </ul>
        </div>
      </div>
    );

  }

}

export default GameSchedule;
