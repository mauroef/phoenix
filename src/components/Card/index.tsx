import React, { FC } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ButtonGroup from './ButtonGroup'
import TechStack from './TechStack'
import { ArticleStyled } from './styles'
import ED from '../../images/projects/electronica-dylon.png'
// import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ProjectCardProps {
  title: string
  description: string
  demo: string
  repo: string
  stack: string[]
  image: any
}

const Card: FC<ProjectCardProps> = ({
  title,
  description,
  demo,
  repo,
  stack,
  image,
}) => {
  const imageSource = getImage(image)

  return (
    <ArticleStyled>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        {imageSource !== undefined && (
          <GatsbyImage image={imageSource} alt={'alt imagen'} />
        )}
        {/* image */}
        {/* TODO: into modal */}
        {/* <p>{description}</p>
        <TechStack stack={stack} /> */}
      </main>
      <footer>
        <ButtonGroup demo={demo} repo={repo} />
      </footer>
    </ArticleStyled>
  )
}

export default Card
