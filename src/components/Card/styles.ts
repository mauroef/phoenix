import styled from '@emotion/styled'

export const ArticleStyled = styled.article`
  background-color: #fff;
  border-radius: 1.125rem;
  box-shadow: 0.125rem 0.25rem 0.75rem rgb(0 0 0 / 8%);
  margin-bottom: 2rem;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  &:hover {
    box-shadow: 2px 0.25rem 1rem rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
  header {
    padding: 1.75rem 1.75rem 0;
    h2 {
      font-size: 22px;
    }
  }
  footer {
    padding: 0 1.75rem 1.75rem;
  }
  @media (min-width: 40rem) {
    color: red;
  }
`
