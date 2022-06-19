import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefinitions } from '../src/typeDef'

const resolvers = {
  Query: {
    latest: () => ({
      launchpad: '5e9e4502f509094188566f88',
      name: 'Starlink 4-19 (v1.5)',
      date_utc: '2022-06-01T17:08:50.000Z',
      flight_number: 167,
      links: {
        webcast: 'https://youtu.be/oCN-BMU9-hM',
        wikipedia: null,
        youtube_id: 'oCN-BMU9-hM',
        reddit: {
          launch:
            'https://www.reddit.com/r/spacex/comments/vdue2y/rspacex_starlink_419_launch_discussion_and/',
        },
        patch: {
          small: 'https://imgur.com/BrW201S.png',
        },
      },
    }),
    next: () => ({
      launchpad: '5e9e4501f509094ba4566f84',
      name: 'Globalstar FM15',
      date_utc: '2022-06-19T04:27:00.000Z',
      flight_number: 169,
      links: {
        webcast: null,
        wikipedia: null,
        youtube_id: null,
        reddit: {
          launch: null,
        },
        patch: {
          small: null,
        },
      },
    }),
    past: () => [
      {
        launchpad: '5e9e4502f5090995de566f86',
        name: 'FalconSat',
        date_utc: '2006-03-24T22:30:00.000Z',
        flight_number: 1,
        links: {
          webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
          wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
          youtube_id: '0a_00nJ_Y88',
          reddit: {
            launch: null,
          },
          patch: {
            small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
          },
        },
      },
      {
        launchpad: '5e9e4502f5090995de566f86',
        name: 'DemoSat',
        date_utc: '2007-03-21T01:10:00.000Z',
        flight_number: 2,
        links: {
          webcast: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc',
          wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
          youtube_id: 'Lk4zQ2wP-Nc',
          reddit: {
            launch: null,
          },
          patch: {
            small: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
          },
        },
      },
    ],
    upcoming: () => [
      {
        launchpad: '5e9e4501f509094ba4566f84',
        name: 'Globalstar FM15',
        date_utc: '2022-06-19T04:27:00.000Z',
        flight_number: 169,
        links: {
          webcast: null,
          wikipedia: null,
          youtube_id: null,
          reddit: {
            launch: null,
          },
          patch: {
            small: null,
          },
        },
      },
      {
        launchpad: '5e9e4501f509094ba4566f84',
        name: 'Starlink 4-21 (v1.5)',
        date_utc: '2022-06-26T00:43:00.000Z',
        flight_number: 170,
        links: {
          webcast: null,
          wikipedia: null,
          youtube_id: null,
          reddit: {
            launch: null,
          },
          patch: {
            small: 'https://imgur.com/BrW201S.png',
          },
        },
      },
    ],
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
