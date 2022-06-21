import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Latest from './Latest'
import { MockedProvider } from '@apollo/client/testing'
import { latestMock } from 'test/launchMockData'
import moment from 'moment'

it('should render the latest launch', async () => {
  render(
    <MockedProvider mocks={latestMock}>
      <Latest />
    </MockedProvider>,
  )

  await waitFor(() => new Promise((res) => setTimeout(res, 0)))
  const title = await screen.findByText('Starlink 4-19 (v1.5)')
  expect(title).toBeInTheDocument()

  const img = await screen.findAllByRole('img')
  expect(img.length).toBe(2)

  const flightNumberText = screen.getByText(/Número do Voo/)
  expect(flightNumberText).toBeInTheDocument()

  const flightNumberValue = screen.getByText('167')
  expect(flightNumberValue).toBeInTheDocument()

  const launchDateText = screen.getByText(/Data de lançamento/)
  expect(launchDateText).toBeInTheDocument()

  const launchDateValue = screen.getByText(
    moment(latestMock[0].result.data.latest.date_utc).format('DD/MM/yyyy'),
  )
  expect(launchDateValue).toBeInTheDocument()

  const launchHourText = screen.getByText(/Hora de lançamento \(UTC\)/)
  expect(launchHourText).toBeInTheDocument()

  const launchHourValue = screen.getByText(
    moment(latestMock[0].result.data.latest.date_utc).format('HH:mm'),
  )
  expect(launchHourValue).toBeInTheDocument()

  const linksTitle = screen.getByText(/Links/)
  expect(linksTitle).toBeInTheDocument()

  const reddit = screen.getByText(/Reddit/i)
  expect(reddit).toBeInTheDocument()

  const youtube = screen.getByText(/Youtube/i)
  expect(youtube).toBeInTheDocument()

  expect(() => screen.getByText(/Wikipedia/i)).toThrow()

  const logoTitle = screen.getByText(/Logo/)
  expect(logoTitle).toBeInTheDocument()
})
