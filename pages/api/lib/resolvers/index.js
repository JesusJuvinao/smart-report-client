import accountResolver from './accounts'

export default {
    ...accountResolver.TYPES,
    Query: {
    ...accountResolver.QUERIES,
    },
    Mutations: {
    ...accountResolver.MUTATIONS,
    }
}