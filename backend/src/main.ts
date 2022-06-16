import { schema } from './schema'
import { createServer } from '@graphql-yoga/node'
import { useResponseCache } from '@envelop/response-cache'

const TTL_CACHE = 5 * 60 * 1000 // 5min

async function main() {
  const server = createServer({
    schema,
    plugins: [useResponseCache({ ttl: TTL_CACHE })],
  })
  await server.start()
}

main()
// query {
//   latest {
//     name
//     full_name
//     status
//     locality
//     details
//     success
//     date_utc
//     failures {
//       time
//       altitude
//       reason
//     }
//     links {
//       patch {
//         small
//         large
//       }
//       reddit {
//         launch
//       }
//       webcast
//       youtube_id
//     }
//   }
// }
