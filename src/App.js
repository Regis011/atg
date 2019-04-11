import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GamesContainer from './components/gamesContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <GamesContainer />
      </div>
    );

  }

}

export default App;
