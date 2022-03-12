import React, { FC } from 'react'
import TechStack from './TechStack'
// import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, stack }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <TechStack stack={stack}/>
    </article>
  )
}

export default ProjectCard
