import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Next from './Next'
import { MockedProvider } from '@apollo/client/testing'
import { nextMock } from 'test/launchMockData'
import moment from 'moment'

it('should render the next launch', async () => {
  render(
    <MockedProvider mocks={nextMock}>
      <Next />
    </MockedProvider>,
  )

  await waitFor(() => new Promise((res) => setTimeout(res, 0)))
  const title = await screen.findByText('Globalstar FM15')
  expect(title).toBeInTheDocument()

  const flightNumberText = screen.getByText(/Número do Voo/)
  expect(flightNumberText).toBeInTheDocument()

  const flightNumberValue = screen.getByText('169')
  expect(flightNumberValue).toBeInTheDocument()

  const launchDateText = screen.getByText(/Data de lançamento/)
  expect(launchDateText).toBeInTheDocument()

  const launchDateValue = screen.getByText(
    moment(nextMock[0].result.data.next.date_utc).format('DD/MM/yyyy'),
  )
  expect(launchDateValue).toBeInTheDocument()

  const launchHourText = screen.getByText(/Hora de lançamento \(UTC\)/)
  expect(launchHourText).toBeInTheDocument()

  const launchHourValue = screen.getByText(
    moment(nextMock[0].result.data.next.date_utc).format('HH:mm'),
  )
  expect(launchHourValue).toBeInTheDocument()

  expect(() => screen.getByText(/Links/i)).toThrow()
  expect(() => screen.getByText(/Reddit/i)).toThrow()
  expect(() => screen.getByText(/Youtube/i)).toThrow()
  expect(() => screen.getByText(/Wikipedia/i)).toThrow()
  expect(() => screen.getByText(/Logo/i)).toThrow()
  expect(() => screen.getByRole('img')).toThrow()
})
