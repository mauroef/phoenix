import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HeaderStyled } from './styles'

const Hero: FC = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(query)

  return (
    <>
      {nodes && (
        <HeaderStyled>
          <article>
            <h1>{nodes[0].frontmatter.name}</h1>
            <h2>{nodes[0].frontmatter.bio}</h2>
          </article>
        </HeaderStyled>
      )}
    </>
  )
}

export default Hero

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(home)/" } }) {
      nodes {
        frontmatter {
          name
          bio
        }
        id
      }
    }
  }
`
