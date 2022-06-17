import { createServer } from '@graphql-yoga/common'
import { schema } from '../src/schema'

it('should request to latest', async () => {
  const yoga = createServer({
    schema,
    cors: (req) => ({
      origin: req.headers.get('origin') || 'http://localhost:3000',
      methods: ['POST'],
    }),
  })

  const response = await yoga.fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{ latest {
        name
        date_utc
        flight_number
      }}`,
    }),
  })

  console.assert(response.status === 200, 'Response status should be 200')
  const executionResult = await response.json()

  console.assert(
    executionResult.data.latest.name === 'Starlink 4-19 (v1.5)',
    'Name spected is Starlink 4-19 (v1.5)',
  )
  console.assert(
    executionResult.data.latest.flight_number === 167,
    'Flight number spected is 167',
  )
})
