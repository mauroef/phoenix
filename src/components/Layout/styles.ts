import { css } from '@emotion/react'

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  html {
    box-sizing: border-box;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 1rem;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f5f5f7;
    color: #1d1d1f;
    font-weight: 400;
    letter-spacing: -0.022rem;
    min-width: 20rem;
  }
  ol,
  ul {
    list-style: none;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  nav + main {
    min-height: calc(100vh - 7.5625rem);
  }
  nav + main + footer {
    height: 7.5625rem;
    margin-bottom: 3.5rem;
  }
  @media (min-width: 40rem) {
    nav + main {
      min-height: calc(100vh - 12rem);
    }
    nav + main + footer {
      height: 5rem;
      margin-bottom: 0;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d;
  }
`
