import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Col, Grid, Row, FormGroup, FormControl, Checkbox, Button, ButtonGroup } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.todos = ['1', '2', '3'];
  }

  getTodos(todo) {
    return (
      <li>
        <Checkbox checked />
        <lable>{todo}</lable>
        <Button>Remove</Button>
      </li>
    );
  }

  render() {
    let newTodos = this.todos.map(todo => this.getTodos(todo));
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">TODOs Application</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">TODOs</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <form>
          <Grid>
            <Row>
              <Col xs={12}>
                <h1 className="text-center">TODOs tasks</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={3}>
                <FormGroup controlId="formNewTodo">
                  <FormControl
                    type="text"
                    placeholder="What needs to be done?"
                  />
                </FormGroup>

                {newTodos}
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={3}>
                <Col xs={3}><p>{this.todos.length} items left</p></Col>
                <Col xs={9}>
                  <ButtonGroup>
                    <Button>All</Button>
                    <Button>Active</Button>
                    <Button>Completed</Button>
                  </ButtonGroup>
                </Col>
              </Col>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}

export default App;
