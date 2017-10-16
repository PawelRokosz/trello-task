import React, { Component } from 'react';

import List from './List';
import tasks from './data/data.json';

class Lists extends Component {

  state = {
    tasks: []
  }

  componentWillMount() {
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className="lists">

        <List />

      </div>
    );
  }
}

export default Lists;
