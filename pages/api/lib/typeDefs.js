import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typesArray = loadFilesSync('**/*.gql')
export const  typeDefs = mergeTypeDefs(typesArray)
