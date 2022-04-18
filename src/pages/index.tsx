import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

const PortfolioIndex: FC = () => {
  return (
    <Layout pageTitle='home'>
      <Hero />
    </Layout>
  )
}

export default PortfolioIndex

