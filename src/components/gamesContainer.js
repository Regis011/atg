import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamesList from './gamesList.js';

class GamesContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      v75: [],
    }

  }

  componentDidMount() {
    this.props.games.v75.then(value => {
      this.setState({v75: value});
    });
  }

  render() {
    const gamesInfo = 'Vlad'
    console.log(this.state.v75);
    return (
      <div className="GamesContainer">

        <GamesList items={this.props} />
        <h2>Spel Information</h2>
        <ul>{gamesInfo}</ul>

      </div>
    );
  }
}

function mapStateToProps(state){
  return { games: state.games };
}

export default connect(mapStateToProps)(GamesContainer);
