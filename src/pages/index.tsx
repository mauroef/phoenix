import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Header from '../components/Header'
import List from '../components/List'
import { Node } from '../interfaces'

interface IndexPageProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const indexStyles = css`
  margin: 3rem 0 1rem;
  padding: 0 1rem;
  @media (min-width: 40rem) {
    margin-right: auto;
    margin-left: auto;
    max-width: 75rem;
  }
  @media (min-width: 78rem) {
    padding: 0;
  }
`

const PortfolioIndex: FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout pageTitle='home'>
      <Seo title='Home' />
      <Hero />
      <article css={indexStyles}>
        <Header title={'Projects.'} subtitle={' Top 3.'} />
        <List items={data} />
      </article>
    </Layout>
  )
}

export default PortfolioIndex

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: frontmatter___pid, order: DESC }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          pid
          title
          description
          demo
          repo
          stack
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
