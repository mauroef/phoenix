import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  backdrop-filter: blur(0.125rem);
  background: rgba(9, 18, 37, 0.4);
  height: 3.5rem;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    div {
      display: none;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      width: 100%;
      & > li {
        & > a {
          background-color: transparent;
          display: inline-block;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          padding: 0.4688rem 1.25rem;
          border: 0.0625rem solid;
          border-radius: 0.375rem;
          border-color: #fff;
          color: #fff;
          &:hover {
            background-color: #1d1d1f;
            border-color: #1d1d1f;#
            color: #fff;
            font-weight: 600;
            transition: 0.3s;
          }
        }
      }
    }
  }
  @media (min-width: 40rem) {
    > div {
      max-width: 75rem;
      div {
        display: block;
        > span {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 500;
        }
      }
      > ul {
        justify-content: flex-end;
        li:nth-of-type(1),
        li:nth-of-type(2) {
          margin-right: 1rem;
        }
      }
    }
  }
`

// backdrop-filter: blur(15px); TODO: blur on backdrop modal
