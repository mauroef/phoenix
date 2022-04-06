import React, { FC } from 'react'
import { HeaderStyled } from './styles'

interface HeroProps {
  avatar: string
  name: string
  bio: string
}

const Hero: FC<HeroProps> = ({ avatar, name, bio }) => {
  return (
    <HeaderStyled>
      <article>
        <h1>{name}</h1>
        <h2>{bio}</h2>
      </article>
    </HeaderStyled>
  )
}

export default Hero