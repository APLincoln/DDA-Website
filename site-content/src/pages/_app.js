import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Head>
        <title>Dina's Drive 🐝</title>
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
