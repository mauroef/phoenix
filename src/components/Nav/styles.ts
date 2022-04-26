import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  backdrop-filter: saturate(180%) blur(1.25rem);
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  height: 3.5rem;
  padding: 0 1rem;
  position: fixed;
  top: inherit;
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
          align-items: center;
          background-color: transparent;
          border-color: #fff;
          border-radius: 0.375rem;
          border: 0.0625rem solid;
          color: #fff;
          display: flex;
          flex-direction: column;
          font-size: 0.625rem;
          font-weight: 400;
          min-width: 5rem;
          padding: 0;
          text-decoration: none;
          &:hover {
            background-color: #1d1d1f;
            border-color: #1d1d1f;
            color: #fff;
            transition: 0.3s;
          }
        }
      }
    }
  }
  @media screen and (min-width: 40rem) {
    top: 0;
    bottom: inherit;
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
        li {
          display: list-item;
          &:nth-of-type(1),
          &:nth-of-type(2) {
            margin-right: 1rem;
          }
          a {
            display: inline-block;
            font-size: 0.875rem;
            padding: 0.4688rem 1.25rem;
            svg {
              display: none;
            }
          }
        }
      }
    }
  }
`
