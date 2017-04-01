import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, Form, Button, ButtonGroup } from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import Todo from './components/todo';
import TodoListFooter from './components/todo.list.footer';
import NewTodo from './components/new.todo';

class App extends Component {

  constructor()
  {
    super();
    this.state = { todos: [
      {value: '1', finished: false },
      {value: '2', finished: true },
      {value: '3', finished: false }
    ]};

    // This binding is necessary to make `this` work in the callback
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleRemovingTodo = this.handleRemovingTodo.bind(this);
    this.handleEditingTodo = this.handleEditingTodo.bind(this);
  }

  handleNewTodo(newTodo) {
    var newTodos = this.state.todos.slice();
    newTodos.push({value: newTodo.value, finished: false });
    this.setState({ todos: newTodos });
  }

  handleRemovingTodo(index) {
    var newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({todos: newTodos});
  }

  handleEditingTodo(index, newValue, isFinished) {
    var newTodos = this.state.todos.slice();
    if (newTodos[index]) {
      newTodos[index].value = newValue;
      newTodos[index].finished = isFinished;
    }
    
    this.setState({todos: newTodos});
  }

  getTodos(todo, index) {
    return (
      <Todo key={index} todo={todo} index={index} onRemove={this.handleRemovingTodo} editFinished={this.handleEditingTodo}/>
    );
  }

  render() {
    let newTodos = this.state.todos.map((todo, index) => this.getTodos(todo, index));
    return (
      <div>
        <Header />
        <Form horizontal>
          <Grid>
            <Row>
              <Col xs={12}>
                <h1 className="text-center">TODOs tasks</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={3}>
                <NewTodo addNewTodo={this.handleNewTodo}/>

                {newTodos}
              </Col>
            </Row>
            <Row>
              <TodoListFooter todosLength={this.state.todos.length} />
            </Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

export default App;
