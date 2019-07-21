import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <h1>TTB example</h1>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
