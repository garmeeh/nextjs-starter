import App, { Container } from 'next/app'
import React from 'react'
import NextSeo from 'next-seo'

/**
 * Most of this file is unchanged from next's default.
 * -> https://github.com/zeit/next.js/#custom-app
 * Here we import our default SEO configuration
 */
import SEO from '../next-seo.config'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        {/* And here we call NextSeo and pass our default configuration to it  */}
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
