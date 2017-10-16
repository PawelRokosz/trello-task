import React, { Component } from 'react';
import './assets/styles/css/main.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h2 className="board-title">Welcome Borad</h2>
        <div className="lists">

          <div className="lists__list">
            <h3 className="lists__title">Basics</h3>
            <div className="lists__tasks">
              <div className="lists__task">Welcome to Trello!</div>
            </div>
            <div className="lists__add-task">Add a card...</div>
          </div>

          <div className="lists__list">
            <h3 className="lists__title">Basics</h3>
            <div className="lists__tasks">
              <div className="lists__task">Welcome to Trello!</div>
            </div>
          </div>
        </div>
  		</div>
    );
  }
}

export default App;
