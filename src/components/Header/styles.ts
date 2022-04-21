import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  margin-bottom: 2rem;
  h1,
  span {
    display: inline;
    font-size: 2rem;
    font-weight: 600;
  }
  span {
    color: #6e6e73;
  }
  @media (min-width: 40rem) {
    h1,
    span {
      font-size: 3rem;
    }
  }
`
