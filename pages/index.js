import { gql, useQuery } from '@apollo/client';
export default function Home() {
  const GET_BEASTS = gql`
  query {
    getAllAccount {
      _id
    idUser
    }
  }`;
  const { loading, error, data } = useQuery(GET_BEASTS);
  console.log(data)
  return ( <div /> )
}
