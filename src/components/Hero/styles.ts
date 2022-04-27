import styled from '@emotion/styled'
import HomeHero from '../../images/bg-home.jpg'

export const HeaderStyled = styled.header`
  background: #0a0b0c no-repeat center center;
  background-size: cover;
  background-image: url('${HomeHero}');
  padding: 10.5rem 0 7rem;
  article {
    backdrop-filter: blur(0.125rem);
    background: rgba(9, 18, 37, 0.4);
    border-radius: 1.125rem;
    padding: 6rem 1rem;
    margin: 0 1rem 3rem;
    h1,
    h2 {
      color: #fff;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
  @media screen and (orientation: portrait) {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding: 0;
  }
  @media (min-width: 40rem) {
    padding: 14rem 0 10.5rem;
    article {
      margin: 0 auto;
      max-width: 35rem;
      padding: 3rem 2rem;
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`
