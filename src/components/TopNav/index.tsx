import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Nav } from './styles'


const TopNav: FC = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Me</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default TopNav
