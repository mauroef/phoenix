import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Node } from '../interfaces'

interface PortfolioIndexProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const PortfolioIndex: FC<PortfolioIndexProps> = ({ data }) => {
  const {
    frontmatter: { avatar, name, bio },
  } = data.allMdx.nodes[0]

  return (
    <Layout pageTitle='home'>
      <Hero avatar={avatar || ''} name={name || ''} bio={bio || ''} />
    </Layout>
  )
}

export default PortfolioIndex

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(home)/" } }) {
      nodes {
        frontmatter {
          avatar
          name
          bio
        }
        id
      }
    }
  }
`
