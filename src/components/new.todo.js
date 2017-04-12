import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

NewTodo.propTypes = {
  addNewTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (newTodo) => {
      dispatch(addTodo(newTodo.value))
    }
  };
}

const VisibleNewTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);

export default VisibleNewTodo;
