import React, { Component } from 'react';
import './GamesList.css';

import GameSchedule from '../GameSchedule/GameSchedule';

class GamesList extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: [],
      types: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    this.props.items.games.v75.then(value => {
      this.setState({
        types: [...this.state.types, { name: 'V75', data: value }] });
    });

    this.props.items.games.v65.then(value => {
      this.setState({
        types: [...this.state.types, { name: 'V65', data: value }] });
    });

    this.props.items.games.v64.then(value => {
      this.setState({
        types: [...this.state.types, { name: 'V64', data: value }] });
    });

    this.props.items.games.v4.then(value => {
      this.setState({
        types: [...this.state.types, { name: 'V4', data: value }] });
    });
  }

  handleChange(e){
    this.setState( { value: e.target.value } );
  }

  render() {

    const gamesList = this.state.types.map((item, idx) => {
      return <option value={item.name} key={idx}> {item.name} </option>
    })

    const data = this.state.types.filter((item) => {
      return item.name === this.state.value
    });

    return (
      <div className="games_list">
        <h2>ATG spel information</h2>
        <select id="select_games" onChange={this.handleChange} value={this.state.value}>
          <option value='' key={-1}>Välj spel</option>
          {gamesList}
        </select>
        { data.length > 0 ? <GameSchedule data={data} /> : '' }
      </div>
    );

  }
}

export default GamesList;
