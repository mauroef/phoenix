import React, { FC } from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

interface LayoutProps {
  pageTitle: string
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Nav></Nav>
      <Main pageTitle={pageTitle}>{children}</Main>
      <Footer></Footer>
    </>
  )
}

export default Layout
