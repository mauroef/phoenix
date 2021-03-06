import React, { FC } from 'react'
import { MainStyled } from './styles'

interface PorfolioProps {
  pageTitle: string
}

const Main: FC<PorfolioProps> = ({ pageTitle, children }) => {
  return (
    <MainStyled>
      {children}
    </MainStyled>
  )
}

export default Main
