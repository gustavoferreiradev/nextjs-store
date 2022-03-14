import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GlobalStyle from '../styles/GlobalStyle'
import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <div className="wrapper">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default MyApp
