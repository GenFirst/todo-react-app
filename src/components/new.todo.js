import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class NewTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', showError: false };

    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, showError: true });
  }

  getValidationState () {
    if (!this.state.showError) return null;

    const length = this.state.value.length;
    if (length > 0) return 'success';
    else return 'error';
  }

  add(event) {
    if(event.keyCode === 13){
      event.preventDefault();

      if (this.state.value.length === 0) {
        this.setState({ showError: true });
        return;
      }

      let newTodo = {value: this.state.value};
      this.setState({ value: '', showError: false });
      this.props.addNewTodo(newTodo);
    }
  }

  render () {
    return (
      <FormGroup controlId="formNewTodo" validationState={this.getValidationState()}>
        <FormControl
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.add}
          placeholder="What needs to be done?"
        />
        <FormControl.Feedback />
      </FormGroup>
    )
  }
}

export default NewTodo;
