import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {
  render() {
    let tasks = this.props.tasks;

    let newTasks = tasks.map((task, index) => {
      return <Task key={index} task={task.task} />
    });

    return (
      <div className="lists__tasks">

        {newTasks}

      </div>
    );
  }
}

export default Tasks;
