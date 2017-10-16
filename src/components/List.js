import React, { Component } from 'react';

import Tasks from './Tasks'

class List extends Component {

  render() {
    return (
      <div className="lists__list">
        <h3 className="lists__title">Basics</h3>

        <Tasks/>

        <div className="lists__add-task">Add a card...</div>
      </div>
    );
  }
}

export default List;
