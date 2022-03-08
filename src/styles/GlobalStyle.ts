import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
`
