import styled from '@emotion/styled'
import HomeHero from '../../images/bg-home.jpg'

export const HeaderStyled = styled.header`
  background: #0a0b0c no-repeat center center;
  background-size: cover;
  background-image: url('${HomeHero}');
  padding: 7rem 0 3.5rem;
  article {
    padding: 6rem 1rem;
    border-radius: 1.125rem;
    h1, h2 {
      color: #FFF;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
  @media (min-width: 40rem) {
    article {
      backdrop-filter: blur(0.125rem);
      background: rgba(9, 18, 37, 0.4);
      margin: 0 auto;
      max-width: 30rem;
      padding: 3rem 2rem;
    }
  }
`