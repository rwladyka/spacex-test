import { createServer } from '@graphql-yoga/common'
import { schema } from './schemaMock'

const getBody = (query: string) => {
  if (query.match(/past|upcoming/g)) {
    return `{ ${query} {
      totalItems
      launches {
        name
        date_utc
        flight_number
      }
    }}`
  }

  return `{ ${query} {
      name
      date_utc
      flight_number
    }
  }`
}

const get = async (query: string) => {
  const response = await createServer({
    schema,
  }).fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getBody(query),
    }),
  })

  return response
}

it('should request to latest', async () => {
  const response = await get('latest')
  const executionResult = await response.json()

  expect(response.status).toBe(200)
  expect(executionResult.data.latest.name).toBe('Starlink 4-19 (v1.5)')
  expect(executionResult.data.latest.date_utc).toBe('2022-06-01T17:08:50.000Z')
})

it('should request to next', async () => {
  const response = await get('next')

  const executionResult = await response.json()

  expect(response.status).toBe(200)
  expect(executionResult.data.next.name).toBe('Globalstar FM15')
  expect(executionResult.data.next.flight_number).toBe(169)
  expect(executionResult.data.next.date_utc).toBe('2022-06-19T04:27:00.000Z')
})

it('should request to past', async () => {
  const response = await get('past(limit: 10, page: 1)')

  const executionResult = await response.json()

  expect(response.status).toBe(200)
  expect(executionResult.data.past.launches[0].name).toBe('FalconSat')
  expect(executionResult.data.past.launches[0].flight_number).toBe(1)
  expect(executionResult.data.past.launches[0].date_utc).toBe(
    '2006-03-24T22:30:00.000Z',
  )
  expect(executionResult.data.past.launches[1].name).toBe('DemoSat')
  expect(executionResult.data.past.launches[1].flight_number).toBe(2)
  expect(executionResult.data.past.launches[1].date_utc).toBe(
    '2007-03-21T01:10:00.000Z',
  )
})

it('should request to upcoming', async () => {
  const response = await get('upcoming(limit: 10, page: 1)')
  console.log(response)

  const executionResult = await response.json()
  console.log(executionResult)
  expect(response.status).toBe(200)
  expect(executionResult.data.upcoming.launches[0].name).toBe('Globalstar FM15')
  expect(executionResult.data.upcoming.launches[0].flight_number).toBe(169)
  expect(executionResult.data.upcoming.launches[0].date_utc).toBe(
    '2022-06-19T04:27:00.000Z',
  )
  expect(executionResult.data.upcoming.launches[1].name).toBe(
    'Starlink 4-21 (v1.5)',
  )
  expect(executionResult.data.upcoming.launches[1].flight_number).toBe(170)
  expect(executionResult.data.upcoming.launches[1].date_utc).toBe(
    '2022-06-26T00:43:00.000Z',
  )
})
