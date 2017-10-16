import React, { Component } from 'react';

import Tasks from './Tasks'

class List extends Component {

  render() {
    return (
      <div className="lists__list">
        <h3 className="lists__title">{this.props.board}</h3>

        <Tasks tasks={this.props.tasks}/>

        <div className="lists__add-task">Add a card...</div>
      </div>
    );
  }
}

export default List;
