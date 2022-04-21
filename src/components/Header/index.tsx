import React, { FC } from 'react'
import { HeaderStyled } from './styles'

interface HeaderProps {
  title: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderStyled>
        <h1>{title}</h1>
        <span>{subtitle}</span>
    </HeaderStyled>
  )
}

export default Header
