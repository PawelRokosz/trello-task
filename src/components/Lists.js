import React, { Component } from 'react';

import List from './List';
import tasks from './data/data.json';

class Lists extends Component {

  state = {
    tasks: [],
    currentTask: {
      "id": null,
      "task": "",
      "board": ""
    },
    dropTask: {
      "id": null,
      "task": "",
      "board": ""
    }
  }

  handleDragStart(id, myTask, board) {
    this.setState({
      currentTask: {
        "id": id,
        "task": myTask,
        "board": board
      },
    });
  }

  handleDrop(id, myTask, board) {
    this.setState({
      dropTask: {
        "id": id,
        "task": myTask,
        "board": board
      }
    });
  }

  handleDragEnd() {
    if (this.state.dropTask.id !== this.state.currentTask.id) {
      tasks.map(task => {
        let board = task.board;
        if (board === this.state.currentTask.board) {
          task.tasks.map(task => {
            let taskId = task.id;
            if (taskId === this.state.currentTask.id) {

            let currentBoard = tasks.find((task) => {
              return task.board === board;
            })
            console.log(currentBoard.tasks)
            console.log(task);
            }
          })
        }
      });
    }
  }

  componentWillMount() {
    this.setState({
      tasks
    })
  }

  render() {
    let tasks = this.state.tasks;

    let lists = tasks.map((list, index) => {
      return <List key={index} board={list["board"]} tasks={list["tasks"]} handleDragEnd={() => this.handleDragEnd()} handleDragStart={(id, myTask, board) => this.handleDragStart(id, myTask, board)} handleDrop={(id, myTask, board) => this.handleDrop(id, myTask, board)}/>
    });

    return (
      <div className="lists">

        {lists}

      </div>
    );
  }
}

export default Lists;
