import '../styles/globals.css'
import { GlobalStyle } from '../public/styles/GlobalStyle'
import { useApollo } from '../apollo/apolloClient'
// import { LayoutC as Layout } from '../container/Layout'
import Context from '../context'
import '../public/styles/App.css'
import { ApolloProvider } from '@apollo/client'
// eslint-disable-next-line
console.log('%c WARNING :', 'color:red;font-size:28px;');
// eslint-disable-next-line
console.log('%c CONSOLE ONLY FOR WEB DEVELOPERS', 'color:red;font-size:12px;');
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <Context>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloProvider>
    </Context>
  )
}
// export default useApollo(MyApp)

