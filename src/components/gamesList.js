import React, { Component } from 'react';
//import './GamesList.css';

class GamesList extends Component {
  constructor(props){
    super(props);

    this.state = {
      gamesList: [
        'V75',
        'V65',
        'V64',
        'V4'
      ]
    }

  }

  render() {

    const gamesList = this.state.gamesList.map((item, idx) => {
      return <li key={idx}><button>Välj spel</button> {item}</li>
    })

    return (
      <div className="games_list">
       <h2>Spel lista</h2>
       <ul>{gamesList}</ul>
      </div>
    );
  }
}

export default GamesList;
