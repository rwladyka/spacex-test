import { getQueryByType } from 'graphql/queries'
import TypeLaunches from 'utils/TypeLaunchesEnum'

export const pastMock = [
  {
    request: {
      query: getQueryByType(TypeLaunches.PAST),
    },
    result: {
      data: {
        past: [
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
                __typename: 'Reddit',
              },
              patch: {
                small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
                __typename: 'Patch',
              },
              __typename: 'Links',
            },
            __typename: 'Launch',
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
                __typename: 'Reddit',
              },
              patch: {
                small: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
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
