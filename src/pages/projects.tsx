import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { Node } from '../interfaces'

interface ProjectListPageProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const ProjectListPage: FC<ProjectListPageProps> = ({ data, children }) => {
  return (
    <Layout pageTitle='projects'>
      {data.allMdx.nodes.map((node: Node) => (
        <ProjectCard
          key={node.id}
          title={node.frontmatter.title || ''}
          description={node.frontmatter.description}
          stack={node.frontmatter.stack || []}
        />
      ))}
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
        frontmatter {
          pid
          title
          description
          stack
        }
        id
      }
    }
  }
`
