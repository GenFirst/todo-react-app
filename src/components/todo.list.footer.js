import React from 'react';
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import { ALL, ACTIVE, COMPLETED} from '../utils/constants';
import { setVisibilityFilter } from '../actions/actions';
import { connect } from 'react-redux';

class TodoListFooter extends React.Component {

  render () {
    return (
      <Col xs={12} smOffset={3} sm={6}>
        <Col xs={3}><p>{this.props.todosLength} items left</p></Col>
        <Col xs={9}>
          <ButtonGroup>
            <Button onClick={() => this.props.changeFilter(ALL)} active={this.props.activeState===ALL}>All</Button>
            <Button onClick={() => this.props.changeFilter(ACTIVE)} active={this.props.activeState===ACTIVE}>Active</Button>
            <Button onClick={() => this.props.changeFilter(COMPLETED)} active={this.props.activeState===COMPLETED}>Completed</Button>
          </ButtonGroup>
        </Col>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeState: state.visibilityFilter,
    todosLength: state.todos.length
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (newFilter) => {
      dispatch(setVisibilityFilter(newFilter))
    }
  };
}

const VisibleTodoListFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListFooter);


export default VisibleTodoListFooter;
