import React, { PropTypes } from 'react';
import { Col, Grid, Row, FormGroup, Checkbox, Button } from 'react-bootstrap';

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    this.props.onRemove(this.props.index);
  }

  render () {
    return (
      <FormGroup>
        <Col xs={1}>
          <Checkbox checked />
        </Col>
        <Col xs={9}>
          <lable>{this.props.todo}</lable>
        </Col>
        <Col xs={2}>
          <Button onClick={this.deleteTodo}><i className="fa fa-trash" aria-hidden="true"></i></Button>
        </Col>
      </FormGroup>
    )
  }
}

export default Todo;
