import styled from '@emotion/styled'

export const ArticleStyled = styled.article`
  background-color: #fff;
  border-radius: 1.125rem;
  box-shadow: 0.125rem 0.25rem 0.75rem rgb(0 0 0 / 8%);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  header {
    padding: 1.75rem 1.75rem 0;
    h2 {
      font-size: 22px;
    }
  }
  main {
    padding: 2rem 6rem;
  }
  footer {
    padding: 0 1.75rem 1.75rem;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      a {
        padding: 0.4688rem 1.25rem;
        border-radius: 0.375rem;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        &:first-of-type {
          background: #007aff;
          color: #fff;
          margin-bottom: 1rem;
        }
        &:nth-of-type(2) {
          background: #c4e0ff;
          color: #007aff;
        }
        &:hover {
          transition: 0.5s;
        }
      }
    }
  }
  @media (min-width: 40rem) {
    &:hover {
      box-shadow: 2px 0.25rem 1rem rgb(0 0 0 / 16%);
      transform: scale3d(1.01, 1.01, 1.01);
    }
    footer {
      > div {
        flex-direction: row;
        a {
          &:first-of-type {
            margin-bottom: 0;
          }
          &:hover,
          &:active {
            filter: brightness(90%);
          }
        }
      }
    }
  }
`
