import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';

import './GameSchedule.scss';
import GameData from '../GameData/GameData';

class GameSchedule extends Component {

 constructor(props){
   super(props)

   this.state = {
     expanded: false,
     openGame: []
   }

   this.handleClick = this.handleClick.bind(this);
   this.closeGameData = this.closeGameData.bind(this);
 }

 handleClick(e){
    const id = e.target.id;

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.atg.se/services/racinginfo/v1/api/games/${id}`;
    axios.get(proxyurl + url)
      .then((response) => {
        this.setState({
          openGame: response.data,
          expanded: true
        })
      })
      .catch((error) => {
        console.log('error', error)
      });
  }

  closeGameData(){
    this.setState({ expanded: false })
  }

  render() {
    const { data } = this.props;
    const state = this.state;
    const name = data[0] ? data[0].name : '';
    const upcoming = data[0] ? data[0].data.upcoming : '';
    const results = data[0] ? data[0].data.results : '';

    const listUpcoming = upcoming.map((item, idx) => {
      const dateToFormat = item.startTime;
      const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>;
      return <li className="collection-item" key={idx}>
        <div className="text_list"> Plats: {item.tracks[0].name}, Börja: {date} </div>
        <div className="button_list"><button className="waves-effect waves-light btn" id={item.id} onClick={this.handleClick}>Läs mer</button></div></li>
    })

    const listResults = results.map((item, idx) => {
      const dateToFormat = item.startTime;
      const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>;
      return <li className="collection-item" key={idx} >
        <div className="text_list">Plats: {item.tracks[0].name}, Börja: {date} </div>
        <div className="button_list"><button className="waves-effect waves-light btn" id={item.id} onClick={this.handleClick}>Läs mer</button></div>
        </li>
    })

    return (
      <div className="game_schedule">
        <h2>Spel Information</h2>
        <div>{name}</div>
        <div className="game_schedule_in">
          <h3>Kommande spel</h3>
          <ul className="collection">
           {listUpcoming}
          </ul>
          { state.expanded ?
            <GameData data={ state.openGame }  closeGameData={ this.closeGameData }/> : ''
          }
          <div>
          </div>
          <h3>Resultat</h3>
          <ul className="collection">
            {listResults}
          </ul>
        </div>
      </div>
    );

  }

}

export default GameSchedule;
