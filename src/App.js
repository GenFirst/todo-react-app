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
    this.todos = ['1', '2', '3'];
  }

  getTodos(todo) {
    return (
      <Todo todo={todo} />
    );
  }

  render() {
    let newTodos = this.todos.map(todo => this.getTodos(todo));
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
                <NewTodo />

                {newTodos}
              </Col>
            </Row>
            <Row>
              <TodoListFooter todosLength={this.todos.length} />
            </Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

export default App;
