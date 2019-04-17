import React, { Component } from 'react';
import Moment from 'react-moment';

import './GameData.scss';


class GameData extends Component {

 constructor(props){
   super(props)

   this.state = {
   }

 }

  render() {

    const { data } = this.props;

    return (
      <div className="game_data">
        <div className="game_data_list">
        {data.races.map((item, idx) => {
          return <div key={idx}>
            <p>Nr: {item.number}, Namn: {item.name}, Start: {item.startTime}</p>
            {item.starts.map((item, idx) => {
              return <div key={idx}> Start nr: {item.number} , Hästnamn: {item.horse.name} ,Förare: {item.driver.firstName + ' ' + item.driver.lastName}
                <div className="collapsible_wrap">
                  <button> Visa Tränare och hästfadern</button>
                  <div className="collapsible_content">
                    <p>Tränare: {item.horse.trainer.firstName + ' ' + item.horse.trainer.firstName}</p>
                    <p>Hästfadern: {item.horse.pedigree.father.name}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        })}
        <button onClick={ this.props.closeGameData }> Stäng </button>
        </div>
      </div>
    );

  }

}

export default GameData;
