import React, { FC } from 'react'

interface PorfolioProps {
  pageTitle: string
}

const Main: FC<PorfolioProps> = ({ pageTitle, children }) => {
  return (
    <main>
      <section>page title: {pageTitle}</section>
      <section>{children}</section>
    </main>
  )
}

export default Main
