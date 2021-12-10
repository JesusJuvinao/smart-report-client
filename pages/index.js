import { gql, useQuery } from '@apollo/client';
export default function Home() {
  const GET_BEASTS = gql`
  query hello {
  hello
}`;
  const { loading, error, data } = useQuery(GET_BEASTS);
  console.log(loading, error, data)
  return (
     <div>
       sdñfjsdñlfsñllHolaaaaaaaaaa
     </div>
     )
}
