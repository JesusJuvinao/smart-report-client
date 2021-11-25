import '../styles/globals.css'
import { GlobalStyle } from '../public/styles/GlobalStyle'
// import { LayoutC as Layout } from '../container/Layout'
import Context from '../context'

import '../public/styles/App.css'

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <GlobalStyle />
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </Context>
  )
}

export default MyApp
