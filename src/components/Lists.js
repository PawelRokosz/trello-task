import React, { Component } from 'react';

import List from './List';
import tasks from './data/data.json';

class Lists extends Component {

  state = {
    tasks: {}
  }

  componentWillMount() {
    this.setState({
      tasks
    })
  }

  render() {
    let tasks = this.state.tasks;

    let lists = tasks.map((list, index) => {
      return <List key={index} board={list["board"]}/>
    });

    return (
      <div className="lists">

        {lists}

      </div>
    );
  }
}

export default Lists;
