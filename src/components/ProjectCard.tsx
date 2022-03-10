import React, { FC } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ProjectCardProps {
  title: string
  description: string
  body: string
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  )
}

export default ProjectCard
