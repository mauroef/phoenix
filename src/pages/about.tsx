import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Node } from '../interfaces'

interface AboutPageProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  return (
    <Layout pageTitle='about'>
      <h1>About</h1>
      <section>
        <p>{data.allMdx.nodes[0].frontmatter.description}</p>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(about)/" } }) {
      nodes {
        frontmatter {
          description
        }
        id
      }
    }
  }
`
