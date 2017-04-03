import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import ListItemLink from './list.item.link';

class Header extends React.Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">TODOs Application</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <ListItemLink to="/">TODOs</ListItemLink>
            <ListItemLink to="/about">About</ListItemLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
