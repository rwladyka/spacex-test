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
    past: async (limit = 5, page: any) => {
      const { data } = await axios.get(routes().past)
      const offset = (page.page - 1) * limit
      return {
        launches: data.slice(offset, offset + limit),
        totalItems: data.length,
      }
    },
    upcoming: async (limit = 5, page: any) => {
      const { data } = await axios.get(routes().upcoming)
      const offset = (page.page - 1) * limit
      return {
        launches: data.slice(offset, offset + limit),
        totalItems: data.length,
      }
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
