'use strict'
import { ApolloError } from 'apollo-server-errors'

export const getAllAccount = async (_, { idComp }, ctx) => {
  console.log('object')
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
