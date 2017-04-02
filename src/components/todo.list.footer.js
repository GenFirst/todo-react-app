import React from 'react';
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import { ALL, ACTIVE, COMPLETED} from '../utils/constants';

class TodoListFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Col xs={6} xsOffset={3}>
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

export default TodoListFooter;
