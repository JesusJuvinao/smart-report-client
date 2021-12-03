import '../styles/globals.css'
import { GlobalStyle } from '../public/styles/GlobalStyle'
import Context from '../context'
import '../public/styles/App.css'
import { createHttpLink, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: "/api/graphql" }),
  });
  
  return (
    <Context>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </Context>
  )
}
