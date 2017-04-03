import React from 'react';
import ReactDOM from 'react-dom'
import { Col, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editMode: false, value: '', showError: false, isFinished: this.props.todo.finished};

    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkEditingFinished = this.checkEditingFinished.bind(this);
    this.handlingLostFocus = this.handlingLostFocus.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  deleteTodo() {
    this.props.onRemove(this.props.index);
  }

  changeToEditMode() {
    this.setState({editMode: true, value: this.props.todo.value});
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

  checkEditingFinished(event) {
    if(event.keyCode === 13){
      event.preventDefault();

      if (this.state.value.length === 0) {
        this.setState({ showError: true });
        return;
      }

      let editedTodo = {index: this.props.index, value: this.state.value};
      this.setState({ value: '', showError: false, editMode: false });
      this.props.editFinished(editedTodo.index, editedTodo.value, this.props.todo.finsihed);
    } else if (event.keyCode === 27) {
      event.preventDefault();

      this.setState({ showError: false, value: '', editMode: false });
    }
  }

  handlingLostFocus() {
    if (this.state.value.length === 0) {
      this.setState({ showError: true });
      return;
    }

    let editedTodo = {index: this.props.index, value: this.state.value};
    this.setState({ showError: false, value: '', editMode: false });
    this.props.editFinished(editedTodo.index, editedTodo.value, this.props.todo.finsihed);
  }

  handleCheckboxChange() {
    let toggledFinish = !this.state.isFinished;
    this.setState({ isFinished: toggledFinish});
    this.props.editFinished(this.props.index, this.props.todo.value, toggledFinish)
  }

  render () {
    if (this.state.editMode) {
      return (
        <FormGroup controlId="formEditTodo" validationState={this.getValidationState()}>
          <FormControl
            type="text"
            inputRef={ref => {if (ref) ReactDOM.findDOMNode(ref).focus();}}
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.checkEditingFinished}
            onBlur={this.handlingLostFocus}
            placeholder="What needs to be done?"
          />
          <FormControl.Feedback />
        </FormGroup>
      )
    }
    else {
      return (
        <FormGroup controlId="formEditTodo">
          <Col xs={1}>
            <Checkbox checked={this.state.isFinished} onChange={this.handleCheckboxChange}/>
          </Col>
          <Col xs={10}>
            <label className="todo-label" onDoubleClick={() => this.changeToEditMode()}>{this.props.todo.value}</label>
          </Col>
          <Col xs={1}>
            <Button onClick={this.deleteTodo}><i className="fa fa-trash" aria-hidden="true"></i></Button>
          </Col>
        </FormGroup>
      )
    }
  }
}

export default Todo;
