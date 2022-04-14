import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import List from '../components/List'
import { Node } from '../interfaces'

interface ProjectPageProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const projectStyles = css`
  margin: 7rem 0 1rem;
  padding: 0 1rem;
  @media (min-width: 40rem) {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    max-width: 75rem;
  }
`

const ProjectPage: FC<ProjectPageProps> = ({ data }) => {
  return (
    <Layout pageTitle='projects'>
      <article css={projectStyles}>
        <Header title={'All Projects.'} subtitle={' Take a look.'} />
        <List items={data} />
      </article>
    </Layout>
  )
}

export default ProjectPage

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: frontmatter___pid, order: DESC }
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
