import React, { FC } from 'react'
import { Link } from 'gatsby'

interface NavProps {
  // pageTitle: string
}

const Nav: FC<NavProps> = ({ children }) => {
  return (
    <nav>
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
    </nav>
  )
}

export default Nav
