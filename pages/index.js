import { gql, useQuery } from '@apollo/client';
export default function Home() {
  const GET_BEASTS = gql`
  query HelloWord {
  HelloWord
}`;
  const { loading, error, data } = useQuery(GET_BEASTS);
  console.log(loading, error, data)
  return (
     <div> 
       Hagamos xxxxx algo chido hoy
     </div>
     )
}
