import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterStyled } from './styles'

const Footer: FC = () => {
  const {
    site: {
      siteMetadata: { github, linkedin, resume },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          resume
          linkedin
          github
        }
      }
    }
  `)

  return (
    <FooterStyled>
      <p>Developed by Mauro Ezequiel Frete &copy; {new Date().getFullYear()}</p>
      <ul>
        <li>
          <a href={linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={github}>GitHub</a>
        </li>
        <li>
          <a href={resume}>Resume</a>
        </li>
      </ul>
    </FooterStyled>
  )
}

export default Footer
