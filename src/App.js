import React, { Component } from 'react';
import './assets/styles/css/main.css';

import Lists from './components/Lists';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h2 className="board-title">Welcome Borad</h2>

        <Lists />

  		</div>
    );
  }
}

export default App;
