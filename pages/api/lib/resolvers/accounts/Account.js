'use strict'
import { ApolloError } from 'apollo-server-errors'

export const hello = async (_, { idComp }, ctx) => {
  return 'Hello world! HOLA STUART YA HAGO CONSULTAS  EN GQL ';
}
export default {
  TYPES: {
  },
  QUERIES: {
    hello
  },
  MUTATIONS: {
  }
}
