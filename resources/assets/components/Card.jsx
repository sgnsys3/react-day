import React, { Component } from 'react';

class Card extends Component {

  constructor () {
    super();
    this.getIndex = this.getIndex.bind(this);
  }

  getIndex() {
    if(this.props.type != 'done') {
      this.props.onClick(this.props.index, this.props.type);
    }
  }

  state = {  }
  render() {
    return (
      <div className={"panel panel-"+ ((this.props.type == 'todo') ? 'danger' : (this.props.type == 'doing') ? 'warning' : 'success')} onClick={this.getIndex}>
        <div className="panel-body">
          {this.props.detail}
        </div>
      </div>
    );
  }
}

export default Card;