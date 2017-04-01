import React from 'react';
import { Col, Button, ButtonGroup } from 'react-bootstrap';

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
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </ButtonGroup>
        </Col>
      </Col>
    )
  }
}

export default TodoListFooter;
