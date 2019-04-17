import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import GamesContainer from './components/GamesContainer/GamesContainer';

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
