import React, { Component } from 'react';

class Task extends Component {

  handleDrag(e) {
    // console.log('drag');
  }

  handleDragStart(e) {
    e.target.classList.add('drag');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.props.task);
    this.props.handleDragStart();
  }

  handleDragEnter(e) {
    e.target.classList.add('over');
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    // return false;
  }

  handleDrop(e) {
    console.log('droped');
    this.props.handleDrop();
  }

  handleDragEnd(e) {
    // console.log('currentTask ', this.state.currentTask);
    // console.log('dropTask ', this.state.dropTask);
    e.target.classList.remove('drag');


    // if (this.state.currentTask !== this.state.dropTask) {
      // e.target.innerHTML = e.dataTransfer.getData('text/html');
    // }
  }

  render() {
    return (
      <div className="lists__task" draggable
        onDrag={(e) => this.handleDrag(e)}
        onDragStart={(e) => this.handleDragStart(e)}
        onDragEnter={(e) => this.handleDragEnter(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}
        onDragEnd={(e) => this.handleDragEnd(e)}
        >
        {this.props.task}
      </div>
    );
  }
}

export default Task;
