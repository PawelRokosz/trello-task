import React, { Component } from 'react';

import Tasks from './Tasks'

class List extends Component {
  state = {
    board: this.props.board
  }

  handleDragStart(id, myTask) {
    this.props.handleDragStart(id, myTask, this.state.board);
  }

  handleDrop(id, myTask) {
    this.props.handleDrop(id, myTask, this.state.board);
  }

  handleDragEnd() {
    this.props.handleDragEnd();
  }

  render() {
    return (
      <div className="lists__list" draggable>
        <h3 className="lists__title">{this.props.board}</h3>

        <Tasks tasks={this.props.tasks} board={this.props.board} handleDragEnd={() => this.handleDragEnd()} handleDragStart={(id, myTask) => this.handleDragStart(id, myTask)} handleDrop={(id, myTask) => this.handleDrop(id, myTask)} />

        <div className="lists__add-task">Add a card...</div>
      </div>
    );
  }
}

export default List;
