import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { css, jsx } from '@emotion/react'
import Layout from '../components/Layout'
import { Node } from '../interfaces'
import Avatar from '../images/avatar.jpg'

interface AboutPageProps {
  data: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const aboutStyles = css`
  margin: 7rem 1rem 1rem;
  background-color: #fff;
  border-radius: 1.125rem;
  padding: 3rem 2rem;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    line-height: 1.5rem;
  }
  div {
    margin-bottom: 1rem;
    img {
      border-radius: 50%;
      display: block;
      margin: 0 auto;
      max-width: 50%;
    }
  }
  a {
    color: #007aff;
    &:hover {
      font-weight: 500;
    }
  }

  @media (min-width: 40rem) {
    margin-right: auto;
    margin-left: auto;
    max-width: 40rem;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 2rem;
      text-align: justify;
    }
  }
`

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  return (
    <Layout pageTitle='about'>
      <article css={aboutStyles}>
        <header>
          <h1>About</h1>
        </header>
        <section>
          <div>
            <img src={Avatar} />
          </div>
          <p>{data.allMdx.nodes[0].frontmatter.description}</p>
          <p>
            If you want to know more about me,{' '}
            <a href={data.allMdx.nodes[0].frontmatter.resume}>
              download my resume
            </a>
            , or follow me on{' '}
            <a href={data.allMdx.nodes[0].frontmatter.linkedin}>LinkedIn</a>
            {'.'}
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(about)/" } }) {
      nodes {
        frontmatter {
          description
          resume
          linkedin
        }
        id
      }
    }
  }
`
