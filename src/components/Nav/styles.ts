import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  align-items: center;
  backdrop-filter: blur(0.125rem);
  background: rgba(9, 18, 37, 0.4);
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
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
        font-weight: 500;
        padding: 0.4688rem 1.25rem;
        border: 0.0625rem solid;
        border-radius: 0.375rem;
        &.red {
          border-color: #FF2D55;
          color: #FF2D55;
          &:hover {
            background-color: #FF2D55;
            color: #FFF;
          }
        }
        &.green {
          border-color: #34c759;
          color: #34c759;
          &:hover {
            background-color: #34c759;
            color: #FFF;
          }
        }
        &.blue {
          border-color: #007aff;
          color: #007aff;
          &:hover {
            background-color: #007aff;
            color: #FFF;
          }
        }
        &:hover {
          transition: 0.3s;
        }
      }
    }
  }
  @media (min-width: 40rem) {
    div {
      display: block;
      > span {
        color: #FFF;
        font-weight: 500;
      }
    }
    ul {
      justify-content: flex-end;
      li:nth-of-type(1),
      li:nth-of-type(2) {
        margin-right: 1rem;
      }
    }
  }
`

// backdrop-filter: blur(15px); TODO: blur on backdrop modal
