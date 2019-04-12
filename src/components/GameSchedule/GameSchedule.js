import React, { Component } from 'react';
import Moment from 'react-moment';

import './GameSchedule.css';


class GameSchedule extends Component {

  render() {

    const { data } = this.props;
    const name = data[0] ? data[0].name : '';
    const upcoming = data[0] ? data[0].data.upcoming : '';
    const results = data[0] ? data[0].data.results : '';

    const listUpcoming = upcoming.map((item) => {
      const dateToFormat = item.startTime;
      const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>;
      return <li>Namn: {item.tracks[0].name}, Börja: {date}</li>
    })

    const listResults = results.map((item) => {
      const dateToFormat = item.startTime;
      const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>;
      return <li>Namn: {item.tracks[0].name}, Börja: {date}</li>
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
