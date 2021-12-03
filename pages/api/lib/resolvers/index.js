import accountResolver from './accounts'

export default {
    ...accountResolver.TYPES,
    Query: {
    ...accountResolver.QUERIES,
    },
    Mutation: {
    ...accountResolver.MUTATIONS,
    }
}