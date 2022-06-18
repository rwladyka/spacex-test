import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { MockedProvider } from '@apollo/client/testing'
import { latestMock, pastMock } from 'test/launchMockData'

it('Should renders menu links', () => {
  render(
    <MockedProvider mocks={latestMock} addTypename={false}>
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
    <MockedProvider mocks={latestMock}>
      <App />
    </MockedProvider>,
  )

  const loading = screen.getByTestId('rw-loading-test-id')

  expect(loading).toBeInTheDocument()
})

it('should render error', async () => {
  render(
    <MockedProvider mocks={pastMock}>
      <App />
    </MockedProvider>,
  )

  await waitFor(() => new Promise((res) => setTimeout(res, 0)))
  const error = await screen.findByText(/Error \:\(/)
  expect(error).toBeInTheDocument()
})
