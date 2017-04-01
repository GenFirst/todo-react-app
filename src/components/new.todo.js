import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class NewTodo extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <FormGroup controlId="formNewTodo">
        <FormControl
          type="text"
          placeholder="What needs to be done?"
        />
      </FormGroup>
    )
  }
}

export default NewTodo;
