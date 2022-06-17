import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { MockedProvider } from '@apollo/client/testing'
import { getQueryByType } from './graphql/queries'
import TypeLaunches from 'utils/TypeLaunchesEnum'

const mocks = [
  {
    request: {
      query: getQueryByType(TypeLaunches.LATEST),
    },
    result: {
      data: {
        latest: {
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

it('Should renders menu links', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  )

  expect(screen.getByText(/LATEST LAUNCH/i)).toBeInTheDocument()
  expect(screen.getByText(/NEXT LAUNCH/i)).toBeInTheDocument()
  expect(screen.getByText(/PAST LAUNCH/i)).toBeInTheDocument()
  expect(screen.getByText(/UPCOMING LAUNCH/i)).toBeInTheDocument()
})

it('should render loading', async () => {
  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>,
  )

  const loading = screen.getByTestId('rw-loading-test-id')

  expect(loading).toBeInTheDocument()
})

it('should render latest launch', async () => {
  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>,
  )

  await waitFor(() => new Promise((res) => setTimeout(res, 0)))
  const rendered = await screen.findByTestId('rw-launch-spot-title-test-id')
  expect(rendered).toBeInTheDocument()

  const img = await screen.findAllByRole('img')
  expect(img.length).toBe(2)
})
