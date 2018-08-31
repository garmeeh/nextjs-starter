import App, { Container } from 'next/app'
import React from 'react'
import NextSeo from 'next-seo'
import Head from 'next/head'

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
        <Head>
          <meta charSet="UTF-8" key="utf" />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <style dangerouslySetInnerHTML={{ __html: Styles }} key="styles" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" key="polyfill" />
        </Head>
        {/* And here we call NextSeo and pass our default configuration to it  */}
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
