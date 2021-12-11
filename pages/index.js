import { gql, useQuery } from '@apollo/client';
export default function Home() {
  const GET_BEASTS = gql`
  query sayHello {
    sayHello
}`;
  const { loading, error, data } = useQuery(GET_BEASTS);
  console.log(loading, error, data)
  if (loading) return <div>LOADING</div>
  return (
     <div> 
      {data?.sayHello}
     </div>
     )
}
