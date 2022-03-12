import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

interface AboutPageProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const PortfolioIndex: FC<AboutPageProps> = ({ data }) => {
  return <Layout pageTitle='home'></Layout>
}

export default PortfolioIndex

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(home)/" } }) {
      nodes {
        frontmatter {
          name
          bio
        }
        id
      }
    }
  }
`
