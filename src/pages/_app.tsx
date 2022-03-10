import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
