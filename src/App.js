import React, { Component } from 'react';
import { Col, Grid, Row, Form } from 'react-bootstrap';
import './App.css';
import Todo from './components/todo';
import VisibleTodoListFooter from './components/todo.list.footer';
import VisibleNewTodo from './components/new.todo';
import { ACTIVE, COMPLETED} from './utils/constants';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from './actions/actions';

class App extends Component {

  constructor(props)
  {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleRemovingTodo = this.handleRemovingTodo.bind(this);
    this.handleEditingTodo = this.handleEditingTodo.bind(this);
  }

  handleRemovingTodo(id) {
    this.props.deleteTodo(id)
  }

  handleEditingTodo(id, newValue, isFinished) {
    this.props.editTodo(id, { value: newValue, isFinished: isFinished });
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
    switch (this.props.nowShowing) {
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

    let newTodos = this.props.todos.filter(filterTodos).map((todo, index) => this.getTodos(todo, index));
    return (
      <Form horizontal>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className="text-center">TODOs tasks</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} smOffset={3} sm={6}>
              <VisibleNewTodo />

              {newTodos}
            </Col>
          </Row>
          <Row>
            <VisibleTodoListFooter />
          </Row>
        </Grid>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    nowShowing: state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    editTodo: (id, todo) => {
      dispatch(editTodo(id, todo));
    }
  };
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default VisibleApp;
