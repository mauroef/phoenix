import React, { FC } from 'react'
import { Link } from 'gatsby'
import { NavStyled } from './styles'
import { Briefcase, Home, User } from '@emotion-icons/typicons'

const TopNav: FC = () => {
  return (
    <NavStyled>
      <div>
        <div>
          <span>Portfolio</span>
        </div>
        <ul>
          <li>
            <Link to='/'>
              <Home title='home' size='24' />
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <User title='about' size='24' />
              About Me
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <Briefcase title='projects' size='24' />
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </NavStyled>
  )
}

export default TopNav
