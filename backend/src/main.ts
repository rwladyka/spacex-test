import 'dotenv/config'
import express, { Request, Response } from 'express'
import { schema } from './schema'
import { createServer } from '@graphql-yoga/node'
import { useResponseCache } from '@envelop/response-cache'
import path from 'path'

const TTL_CACHE = 5 * 60 * 1000 // 5min

async function main() {
  const app = express()

  const graphQLServer = createServer({
    schema,
    plugins: [useResponseCache({ ttl: TTL_CACHE })],
    cors: (req) => ({
      origin: process.env.CORS_ORIGIN,
      methods: ['POST'],
    }),
  })

  app.use('/graphql', graphQLServer)

  app.use(express.static(path.join(__dirname, '../../front/build/')))

  app.listen(process.env.PORT || 4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql')
  })
}

main()
