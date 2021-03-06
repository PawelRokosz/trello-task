import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {
  handleDragStart(id, myTask) {
    this.props.handleDragStart(id, myTask);
  }

  handleDrop(id, myTask) {
    this.props.handleDrop(id, myTask);
  }

  handleDragEnd() {
    this.props.handleDragEnd();
  }

  render() {
    let tasks = this.props.tasks;

    let newTasks = tasks.map((task, index) => {
      let id = tasks[index].id;
      let myTask = task.task
      return <Task key={index} id={id} task={myTask} handleDragEnd={() => this.handleDragEnd()} handleDragStart={() => this.handleDragStart(id, myTask)} handleDrop={() => this.handleDrop(id, myTask)}/>
    });

    return (
      <div className="lists__tasks">

        {newTasks}

      </div>
    );
  }
}

export default Tasks;
