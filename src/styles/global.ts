import { createGlobalStyle  } from 'styled-components';


const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'MADE Outer Sans';
    src: url('/fonts/MADEOuterSans-Light.woff2') format('woff2'),
        url('/fonts/MADEOuterSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'MADE Outer Sans';
    src: url('/fonts/MADEOuterSans-Medium.woff2') format('woff2'),
        url('/fonts/MADEOuterSans-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'MADE Outer Sans';
    src: url('/fonts/MADEOuterSans-Bold.woff2') format('woff2'),
        url('/fonts/MADEOuterSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    &::before,
        &::after {
            box-sizing: inherit;
        }
    }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: ${props => props.theme.font.family};
  }
`

export default GlobalStyles