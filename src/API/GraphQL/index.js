import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { gql} from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://profound-marmot-29.hasura.app/v1/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;

//-------------------End Points-------------------------\\

export const My_Query = gql`
  query MyQuery {
    check_in {
      id
      comment
      created_at
      image_url
      name
      updated_at
    }
  }
`;

export const Add_check_in = gql`
    mutation MyMutation($check_in: check_in_insert_input!) {
      insert_check_in_one(object: $check_in) {
        id
        name
      }
    }
  `;