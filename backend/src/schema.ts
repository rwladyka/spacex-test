import { makeExecutableSchema } from '@graphql-tools/schema'
import axios from 'axios'
import { routes } from './routes'
import { typeDefinitions } from './typeDef'

const resolvers = {
  Query: {
    latest: async () => {
      const { data } = await axios.get(routes().latest)
      return data
    },
    next: async () => {
      const { data } = await axios.get(routes().next)
      return data
    },
    past: async () => {
      const { data } = await axios.get(routes().past)
      return data
    },
    upcoming: async () => {
      const { data } = await axios.get(routes().upcoming)
      return data
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
