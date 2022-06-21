import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Past from './Past'
import { MockedProvider } from '@apollo/client/testing'
import { latestMock, pastMock } from 'test/launchMockData'
import moment from 'moment'

it('should render the past launches', async () => {
  render(
    <MockedProvider mocks={pastMock}>
      <Past />
    </MockedProvider>,
  )

  await waitFor(() => new Promise((res) => setTimeout(res, 0)))
  const img = await screen.findAllByRole('img')
  expect(img.length).toBe(4)

  const title1 = screen.getByText('FalconSat')
  expect(title1).toBeInTheDocument()
  const title2 = screen.getByText('DemoSat')
  expect(title2).toBeInTheDocument()

  const flightNumberText = screen.getAllByText(/Número do Voo/)
  expect(flightNumberText.length).toBe(2)

  const flightNumberValue1 = screen.getByText('1')
  expect(flightNumberValue1).toBeInTheDocument()
  const flightNumberValue2 = screen.getByText('2')
  expect(flightNumberValue2).toBeInTheDocument()

  const launchDateText = screen.getAllByText(/Data de lançamento/)
  expect(launchDateText.length).toBe(2)

  const { launches } = pastMock[0].result.data.past

  const launchDateValue1 = screen.getByText(
    moment(launches[0].date_utc).format('DD/MM/yyyy'),
  )
  expect(launchDateValue1).toBeInTheDocument()
  const launchDateValue2 = screen.getByText(
    moment(launches[1].date_utc).format('DD/MM/yyyy'),
  )
  expect(launchDateValue2).toBeInTheDocument()

  const launchHourText = screen.getAllByText(/Hora de lançamento \(UTC\)/)
  expect(launchHourText.length).toBe(2)

  const launchHourValue1 = screen.getByText(
    moment(launches[0].date_utc).format('HH:mm'),
  )
  expect(launchHourValue1).toBeInTheDocument()
  const launchHourValue2 = screen.getByText(
    moment(launches[1].date_utc).format('HH:mm'),
  )
  expect(launchHourValue2).toBeInTheDocument()

  const linksTitle = screen.getAllByText(/Links/)
  expect(linksTitle.length).toBe(2)

  const youtube = screen.getAllByText(/Youtube/i)
  expect(youtube.length).toBe(2)

  const wikipedia = screen.getAllByText(/Wikipedia/i)
  expect(wikipedia.length).toBe(2)

  const logoTitle = screen.getAllByText(/Logo/)
  expect(logoTitle.length).toBe(2)

  expect(() => screen.getByText(/Reddit/i)).toThrow()
})
