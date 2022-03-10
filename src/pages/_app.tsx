import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
