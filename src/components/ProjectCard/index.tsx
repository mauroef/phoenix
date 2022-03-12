import React, { FC } from 'react'
import ButtonGroup from './ButtonGroup'
import TechStack from './TechStack'
// import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ProjectCardProps {
  title: string
  description: string
  demo: string
  repo: string
  stack: string[]
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  demo,
  repo,
  stack,
}) => {
  console.log('ola',{demo, repo})
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <ButtonGroup demo={demo} repo={repo} />
      <TechStack stack={stack} />
    </article>
  )
}

export default ProjectCard
