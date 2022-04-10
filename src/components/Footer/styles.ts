import styled from '@emotion/styled'

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  > ul {
    display: flex;
    justify-content: space-around;
    li a {
      color: #6e6e73;
      font-size: 0;
      text-decoration: none;
      &:hover {
        color: #1d1d1f;
        font-weight: 600;
        transition: 0.3s;
      }
    }
  }
  > p {
    color: #6e6e73;
    margin-top: 1rem;
    text-align: center;
  }
  @media (min-width: 40rem) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 75rem;
    > ul {
      li {
        &:first-of-type {
          a:hover {
            color: #007aff;
          }
        }
        &:nth-of-type(2) {
          margin: 0 2rem;
        }
        &:nth-of-type(3) {
          a:hover {
            color: #FF2D55;
          }
        }
        a {
          font-size: 1rem;
        }
      }
    }
    > p {
      line-height: 3rem;
      margin-top: 0;
      min-width: 23rem;
      text-align: left;
    }
  }
`
