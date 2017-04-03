import React, { Component } from 'react';
import { Col, Grid, Row, Form } from 'react-bootstrap';
import './App.css';
import Todo from './components/todo';
import TodoListFooter from './components/todo.list.footer';
import NewTodo from './components/new.todo';
import { ALL, ACTIVE, COMPLETED} from './utils/constants';
import uuid from 'uuid/v4';

class App extends Component {

  constructor()
  {
    super();
    this.state = { todos: [
      {value: '1', finished: false, id: uuid() },
      {value: '2', finished: true, id: uuid() },
      {value: '3', finished: false, id: uuid() }],
      nowShowing: ALL
    };

    // This binding is necessary to make `this` work in the callback
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleRemovingTodo = this.handleRemovingTodo.bind(this);
    this.handleEditingTodo = this.handleEditingTodo.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleNewTodo(newTodo) {
    var newTodos = this.state.todos.slice();
    newTodos.push({value: newTodo.value, finished: false, id: uuid() });
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

  handleFilterChange(newFilter) {
    this.setState({nowShowing: newFilter});
  }

  filterAll(value) {
    return true;
  }

  filterCompleted(value) {
    return value.finished;
  }

  filterActive(value) {
    return !value.finished;
  }

  getTodos(todo, index) {
    return (
      <Todo key={todo.id} todo={todo} index={index} onRemove={this.handleRemovingTodo} editFinished={this.handleEditingTodo}/>
    );
  }

  render() {
    let filterTodos = this.filterAll;
    switch (this.state.nowShowing) {
      case ACTIVE:
        filterTodos = this.filterActive;
        break;
      case COMPLETED:
        filterTodos = this.filterCompleted;
        break;
      default:
        filterTodos = this.filterAll;
        break;
    }

    let newTodos = this.state.todos.filter(filterTodos).map((todo, index) => this.getTodos(todo, index));
    return (
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
            <TodoListFooter todosLength={this.state.todos.filter(this.filterActive).length} activeState={this.state.nowShowing} changeFilter={this.handleFilterChange}/>
          </Row>
        </Grid>
      </Form>
    );
  }
}

export default App;
