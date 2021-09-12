import Layout from '../components/layout/Layout'
import Menu from '../components/menu/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Menu/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
