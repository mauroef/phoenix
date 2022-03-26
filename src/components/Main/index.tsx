import React, { FC } from 'react'
import { MainStyled } from './styles'

interface PorfolioProps {
  pageTitle: string
}

const Main: FC<PorfolioProps> = ({ pageTitle, children }) => {
  return (
    <MainStyled>
      <section>{children}</section>
      <section>page title: {pageTitle}</section>
    </MainStyled>
  )
}

export default Main
