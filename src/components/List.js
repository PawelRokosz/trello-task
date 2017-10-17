import React, { Component } from 'react';

import Tasks from './Tasks'

class List extends Component {
  // state = {
  //   currentDrag: ''
  // }
  //
  // handleDrag(e) {
  //   // console.log('drag');
  //   this.setState({
  //     currentDrag: e.currentTarget
  //   })
  // }
  //
  // handleDragStart(e) {
  //   e.dataTransfer.setData('text/plain', null);
  //   // e.target.classList.add('drag');
  //   // this.props.sendData(e.target);
  // }
  //
  // handleDragEnd(e) {
  //   this.setState({
  //     currentDrag: ''
  //   })
  //   // e.target.classList.remove('drag');
  // }
  //
  // handleDragEnter(e) {
  //   if(e.target.draggable === true) {
  //     // console.log(e.target, this.state.currentDrag );
  //     // e.target.classList.add('over');
  //   }
  // }
  //
  // handleDragLeave(e) {
  //   // e.target.classList.remove('over');
  // }
  //
  // handleDragOver(e) {
  //   e.preventDefault();
  //   e.dataTransfer.dropEffect = 'copy';
  // }
  //
  // handleDrop(e) {
  //   // console.log('dropped');
  // }

  render() {
    return (
      <div className="lists__list" draggable>
        <h3 className="lists__title">{this.props.board}</h3>

        <Tasks tasks={this.props.tasks} board={this.props.board} />

        <div className="lists__add-task">Add a card...</div>
      </div>
    );
  }
}

export default List;
