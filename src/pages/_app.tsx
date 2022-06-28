import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJs and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
