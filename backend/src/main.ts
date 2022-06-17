import { schema } from './schema'
import { createServer } from '@graphql-yoga/node'
import { useResponseCache } from '@envelop/response-cache'

const TTL_CACHE = 5 * 60 * 1000 // 5min

async function main() {
  const server = createServer({
    schema,
    plugins: [useResponseCache({ ttl: TTL_CACHE })],
    cors: (req) => ({
      origin: req.headers.get('origin') || 'http://localhost:3000',
      methods: ['POST'],
    }),
  })
  await server.start()
}

main()
