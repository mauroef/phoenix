import React, { FC } from 'react'
import { css } from '@emotion/react'
import HomeHero from '../images/bg-home.jpg'

interface FooterProps {
  avatar: string
  name: string
  bio: string
}

const heroStyles = css`
  background-color: blue;
`

const Hero: FC<FooterProps> = ({ avatar, name, bio }) => {
  return (
    <header css={heroStyles}>
      <img src={HomeHero} />
      <h1>{name}</h1>
      <h2>{bio}</h2>
    </header>
  )
}

export default Hero
