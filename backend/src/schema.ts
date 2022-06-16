import { makeExecutableSchema } from '@graphql-tools/schema'
import axios from 'axios'
import { log } from 'console'
import { routes } from './routes'
import { typeDefinitions } from './typeDef'

const resolvers = {
  Query: {
    latest: async () => {
      const { data } = await axios.get(routes().latest)
      log(data)
      return data
    },
    next: async () => {
      const { data } = await axios.get(routes().next)
      log(data)
      return data
    },
    past: async () => {
      const { data } = await axios.get(routes().past)
      log(data)
      return data
    },
    upcoming: async () => {
      const { data } = await axios.get(routes().upcoming)
      log(data)
      return data
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
