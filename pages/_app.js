  
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Roboto Slab';
    src: url("/RobotoSlab-Regular.ttf") format('truetype');
  }
  html {
    --red: #ff0000;
    --coral: #ffb39c;
    --black: #393939;
    --orange: #d49b00;
    --grey: #292929;
    --green: #98ddca;
    --mediumGreen: #67a393;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGray);
    --offWhite: #ededed;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --max: 1800px;
    --ts: 3px 3px 2px rgba(0,0,0,0.8);
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    font-family: sans-serif;
    position: relative;
    min-height: 100vh;
 }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
    font-weight: 200;
    margin: 1rem 0;
  }
  h1 {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 3rem;
    font-weight: 400;
    margin: 1rem;
  }
  h2, h3, h4 {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 2rem;
    font-weight: 200;
    margin: 1rem;
  }
  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 2px;
    min-width: 200px;
    margin: 1rem;
    border: 1px solid var(--grey);
    background: none;
    cursor: pointer;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const InnerStyles = styled.div`
  min-height: 100vh;
  display: flex;
  
  justify-content: center;
    .inner {
      width: 100%;
      max-width: var(--max);
    }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <InnerStyles>
          <div className='inner'>
              <Component {...pageProps} />
          </div>
        </InnerStyles>
        <Footer />
      </ThemeProvider>
    </>
  )
}