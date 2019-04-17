import React, { Component } from 'react';
import { connect } from 'react-redux';

import './GamesContainer.scss';

import GamesList from '../GamesList/GamesList';

class GamesContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      types: ['V75', 'V65', 'V64', 'V4'],
      v75: [],
      v65: [],
      v64: [],
      v4:  []
    }

  }

  componentDidMount() {
    this.props.games.v75.then(value => {
      this.setState({v75: value});
    });
    this.props.games.v65.then(value => {
      this.setState({v65: value});
    });
    this.props.games.v64.then(value => {
      this.setState({v64: value});
    });
    this.props.games.v4.then(value => {
      this.setState({v4: value});
    });
  }

  render() {

    return (
      <div className="games_container">
        <GamesList items={this.props} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { games: state.games };
}

export default connect(mapStateToProps)(GamesContainer);
