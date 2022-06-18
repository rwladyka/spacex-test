import { getQueryByType } from 'graphql/queries'
import TypeLaunches from 'utils/TypeLaunchesEnum'

export const upcomingMock = [
  {
    request: {
      query: getQueryByType(TypeLaunches.UPCOMING),
    },
    result: {
      data: {
        upcoming: [
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
                __typename: 'Reddit',
              },
              patch: {
                small: null,
                __typename: 'Patch',
              },
              __typename: 'Links',
            },
            __typename: 'Launch',
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
                __typename: 'Reddit',
              },
              patch: {
                small: 'https://imgur.com/BrW201S.png',
                __typename: 'Patch',
              },
              __typename: 'Links',
            },
            __typename: 'Launch',
          },
        ],
      },
    },
  },
]