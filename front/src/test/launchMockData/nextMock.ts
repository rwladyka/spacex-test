import { getQueryByType } from 'graphql/queries'
import TypeLaunches from 'utils/TypeLaunchesEnum'

export const nextMock = [
  {
    request: {
      query: getQueryByType(TypeLaunches.NEXT),
    },
    result: {
      data: {
        [TypeLaunches.NEXT]: {
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
      },
    },
  },
]
