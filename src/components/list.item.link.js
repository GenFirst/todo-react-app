import React from 'react'
import { Route, Link } from 'react-router-dom'

const ListItemLink = ({to, children}) => (
  <Route exact path={to} children={({match}) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} >{children}</Link>
    </li>
  )} />
)

export default ListItemLink
