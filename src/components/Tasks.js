import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {
  render() {
    return (
      <div className="lists__tasks">

        <Task />

      </div>
    );
  }
}

export default Tasks;
