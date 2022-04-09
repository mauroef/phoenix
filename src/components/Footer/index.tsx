import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  DocumentText,
  SocialGithubCircular,
  SocialLinkedinCircular,
} from '@emotion-icons/typicons'

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
      <ul>
        <li>
          <a href={linkedin} target='_blank' rel='noopener noreferrer'>
            <SocialLinkedinCircular title='linkedin' size='48' />
            LinkedIn
          </a>
        </li>
        <li>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <SocialGithubCircular title='github' size='48' />
            GitHub
          </a>
        </li>
        <li>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <DocumentText title='resume' size='48' />
            Resume
          </a>
        </li>
      </ul>
      <p>Developed by Mauro Ezequiel Frete &copy; {new Date().getFullYear()}</p>
    </FooterStyled>
  )
}

export default Footer
