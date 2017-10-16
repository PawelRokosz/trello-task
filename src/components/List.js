import React, { Component } from 'react';

import Tasks from './Tasks'

class List extends Component {
  state = {
    currentDrag: ''
  }

  handleDrag(e) {
    console.log('drag');
    this.setState({
      currentDrag: e.currentTarget
    })
  }

  handleDragStart(e) {
    e.dataTransfer.setData('text/plain', null);
    e.target.classList.add('drag');
    // this.props.sendData(e.target);
  }

  handleDragEnd(e) {
    this.setState({
      currentDrag: ''
    })
    e.target.classList.remove('drag');
  }

  handleDragEnter(e) {
    if(e.target.draggable === true) {
      console.log(e.target, this.state.currentDrag );
      e.target.classList.add('over');
    }
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  handleDrop(e) {
    console.log('dropped');
  }

  render() {
    return (
      <div className="lists__list" draggable
        onDrag={(e) => this.handleDrag(e)}
        onDragStart={(e) => this.handleDragStart(e)}
        onDragEnd={(e) => this.handleDragEnd(e)}
        onDragEnter={(e) => this.handleDragEnter(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}>
        <h3 className="lists__title">{this.props.board}</h3>

        <Tasks tasks={this.props.tasks}/>

        <div className="lists__add-task">Add a card...</div>
      </div>
    );
  }
}

export default List;
