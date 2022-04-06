import React, { FC } from 'react'
import { Link } from 'gatsby'
import { NavStyled } from './styles'

const TopNav: FC = () => {
  return (
    <NavStyled>
      <div>
        <div>
          <span>Portfolio</span>
        </div>
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
      </div>
    </NavStyled>
  )
}

export default TopNav
