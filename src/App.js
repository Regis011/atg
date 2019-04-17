import React, { Component } from 'react';
import logo from './logo.svg';

//css
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

import GamesContainer from './components/GamesContainer/GamesContainer';

class App extends Component {

  render() {

    return (
      <div className="App container">
        <GamesContainer />
      </div>
    );

  }

}

export default App;
