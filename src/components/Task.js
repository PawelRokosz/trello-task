import React, { Component } from 'react';

class Task extends Component {
  state = {
    currentTask: '',
    dropTask: ''
  }

  handleDrag(e) {
    // console.log('drag');
  }

  changeState(data) {
    this.setState({
      currentTask: data
    });
  }

  handleDragStart(e) {
    e.target.classList.add('drag');
    this.changeState(e.target.innerHTML);
    console.log(this.props);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
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
    // console.log(this.state.currentTask);
    // return false;
  }

  handleDrop(e) {
    // console.log('droped');
    // console.log(this.state.currentTask);
    // console.log(this.state.currentTask);
    // console.log(e.target)
    // console.log(e.target);
    // if (this.state.currentTask !== e.target.innerHTML) {
    //
    //   e.target.innerHTML = e.dataTransfer.getData('text/html');
    // }
    // return false;
  }

  handleDragEnd(e) {
    // console.log(this.state.currentTask);
    // console.log(this.state.dropTask);
    e.target.classList.remove('drag');
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
