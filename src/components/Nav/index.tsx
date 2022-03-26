import React, { FC } from 'react'
import { Link } from 'gatsby'
import { NavStyled } from './styles'


const TopNav: FC = () => {
  return (
    <NavStyled>
      <div>
        <span>Portfolio</span>
      </div>
      <ul>
        <li>
          <Link to='/' className='blue'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='green'>About Me</Link>
        </li>
        <li>
          <Link to='/projects' className='red'>Projects</Link>
        </li>
      </ul>
    </NavStyled>
  )
}

export default TopNav
