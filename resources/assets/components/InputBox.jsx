import React, { Component } from 'react';

class InputBox extends Component {
  constructor(){
    super();
    this.state = {
      item : []
    }
  }

  state = {  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="row">
          <div className="col-sm-10 col-xs-12">
            <div className="form-group">
              <input name="todo" type="text" className="form-control" id="exampleInputEmail1" placeholder="Add Todo List" autoComplete="off"/>
            </div>
          </div>
          <div className="col-sm-2 col-xs-12">
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default InputBox;