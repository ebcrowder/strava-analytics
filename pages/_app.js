import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  div#__next, html, body {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 26px;
    font-weight: 300;
    margin: 0;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
