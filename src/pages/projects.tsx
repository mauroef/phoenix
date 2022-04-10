import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Card from '../components/Card'
import { Node } from '../interfaces'

interface ProjectListPageProps {
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
    max-width: 75rem;
  }
`

const ProjectListPage: FC<ProjectListPageProps> = ({ data, children }) => {
  return (
    <Layout pageTitle='projects'>
      <article css={projectStyles}>
        <Header title={'All Projects.'} subtitle={' Take a look around.'} />
        {data.allMdx.nodes.map((node: Node) => (
          <Card
            key={node.id}
            title={node.frontmatter.title || ''}
            description={node.frontmatter.description}
            demo={node.frontmatter.demo || ''}
            repo={node.frontmatter.repo || ''}
            stack={node.frontmatter.stack || []}
            image={node.frontmatter.image}
          />
        ))}
      </article>
    </Layout>
  )
}

export default ProjectListPage

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
