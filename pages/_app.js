import '../styles/globals.css'
import { GlobalStyle } from '../public/styles/GlobalStyle'
import useApollo from '../apollo/apolloClient'
// import { LayoutC as Layout } from '../container/Layout'
import Context from '../context'
import '../public/styles/App.css'
// eslint-disable-next-line
console.log('%c WARNING :', 'color:red;font-size:28px;');
// eslint-disable-next-line
console.log('%c CONSOLE ONLY FOR WEB DEVELOPERS', 'color:red;font-size:12px;');
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
// export default useApollo(MyApp)

export default useApollo(MyApp)
