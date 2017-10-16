import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {
  render() {
    return (
      <div className="lists__tasks">

        <Task task={this.props.task} />

      </div>
    );
  }
}

export default Tasks;
