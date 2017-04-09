import React, { Component } from 'react';
import Card from '../components/Card.jsx';
import AddBox from '../components/InputBox.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {

  constructor () {
    super();
    this.onClickCard = this.onClickCard.bind(this);
  }

  state = { 
    todo: [],
    doing: [],
    done: []
  }

  onClickCard = (input, type) => {
    let {todo, doing, done} = this.state;
    if(type == 'todo') {
      doing = [...doing, todo.splice(input, 1)[0]];
    } else if(type == 'doing') {
      done = [...done, doing.splice(input, 1)[0]];
    }
    this.setState({
      todo: todo,
      doing: doing,
      done: done
    });
  }

  render() {
    let {todo, doing, done} = this.state;
    let submit = (e) => {
      this.setState({
        todo: [...todo, e.target.todo.value]
      });
      e.target.todo.value = "";
      e.preventDefault();
    }
    return (
    <div className="container">
      <h1 className="text-center">Todo List Helper</h1>
      <AddBox onSubmit={submit}/>
      <div className="row">
        <div className="col-xs-4">
          <h4 className="text-center">Todo</h4>
          { todo.map( (detail, i) => <Card detail={detail} key={uuid()} onClick={this.onClickCard} index={i} type="todo"/> ) }
        </div>
        <div className="col-xs-4">
          <h4 className="text-center">Doing</h4>
          { doing.map( (detail, i) => <Card detail={detail} key={uuid()} onClick={this.onClickCard} index={i} type="doing"/> ) }
        </div>
        <div className="col-xs-4">
          <h4 className="text-center">Done</h4>
          { done.map( (detail, i) => <Card detail={detail} key={uuid()} type="done"/> ) }
        </div>
      </div>
    </div>
    );
  }
}

export default App;