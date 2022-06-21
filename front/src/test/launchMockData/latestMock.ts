import { getQueryByType } from 'graphql/queries'
import TypeLaunches from 'utils/TypeLaunchesEnum'

export const latestMock = [
  {
    request: {
      query: getQueryByType(TypeLaunches.LATEST),
    },
    result: {
      data: {
        [TypeLaunches.LATEST]: {
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
      },
    },
  },
]
