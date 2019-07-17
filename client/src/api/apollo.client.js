import ApolloClient from 'apollo-boost';
import { BASE_URL } from './config';

export default new ApolloClient({
  uri: BASE_URL
});

