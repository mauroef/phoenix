import styled from '@emotion/styled'

export const ListStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 40rem) and (max-width: 60rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 60rem) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }
`
