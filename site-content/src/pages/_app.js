import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dina's Drive 🐝</title>
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
