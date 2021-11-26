import '../styles/globals.css'
import { GlobalStyle } from '../public/styles/GlobalStyle'
import { useApollo } from '../apollo/apolloClient'
import '../public/styles/App.css'
import { ApolloProvider } from '@apollo/client'
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
