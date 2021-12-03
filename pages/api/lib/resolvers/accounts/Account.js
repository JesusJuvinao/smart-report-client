'use strict'
import { ApolloError } from 'apollo-server-errors'

export const getAllAccount = async (_, { idComp }, ctx) => {
  return 'getAllAccount'
}
export default {
  TYPES: {
  },
  QUERIES: {
    getAllAccount
  },
  MUTATIONS: {
  }
}
