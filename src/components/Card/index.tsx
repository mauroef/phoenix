import React, { FC } from 'react'
import ButtonGroup from './ButtonGroup'
import TechStack from './TechStack'
import { ArticleStyled } from './styles'
// import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ProjectCardProps {
  title: string
  description: string
  demo: string
  repo: string
  stack: string[]
}

const Card: FC<ProjectCardProps> = ({
  title,
  description,
  demo,
  repo,
  stack,
}) => {
  return (
    <ArticleStyled>
      <header>
        <h2>{title}</h2>
      </header>
      <div>
        {/* image */}
        {/* TODO: into modal */}
        <p>{description}</p>
        <TechStack stack={stack} />
      </div>
      <footer>
        <ButtonGroup demo={demo} repo={repo} />
      </footer>
    </ArticleStyled>
  )
}

export default Card
