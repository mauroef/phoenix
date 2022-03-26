import React, { FC } from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles } from './styles'
import Nav from '../TopNav'
import Main from '../Main'
import Footer from '../Footer'

interface LayoutProps {
  pageTitle: string
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Nav />
      <Main pageTitle={pageTitle}>{children}</Main>
      <Footer></Footer>
    </>
  )
}

export default Layout
