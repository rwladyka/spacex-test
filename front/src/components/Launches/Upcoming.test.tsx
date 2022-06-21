import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Upcoming from './Upcoming'
import { MockedProvider } from '@apollo/client/testing'
import { upcomingPaginedMock, upcomingMock } from 'test/launchMockData'
import moment from 'moment'

describe('Upcoming component', () => {
  it('should render the upcoming launches', async () => {
    render(
      <MockedProvider mocks={upcomingMock}>
        <Upcoming />
      </MockedProvider>,
    )

    await waitFor(() => new Promise((res) => setTimeout(res, 0)))
    const img = await screen.findAllByRole('img')
    expect(img.length).toBe(1)

    const title1 = screen.getByText('Globalstar FM15')
    expect(title1).toBeInTheDocument()
    const title2 = screen.getByText('Starlink 4-21 (v1.5)')
    expect(title2).toBeInTheDocument()

    const flightNumberText = screen.getAllByText(/Número do Voo/)
    expect(flightNumberText.length).toBe(2)

    const flightNumberValue1 = screen.getByText('169')
    expect(flightNumberValue1).toBeInTheDocument()
    const flightNumberValue2 = screen.getByText('170')
    expect(flightNumberValue2).toBeInTheDocument()

    const launchDateText = screen.getAllByText(/Data de lançamento/)
    expect(launchDateText.length).toBe(2)

    const { launches } = upcomingMock[0].result.data.upcoming

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

    const logoTitle = screen.getByText(/Logo/)
    expect(logoTitle).toBeInTheDocument()

    expect(() => screen.getByText(/Links/i)).toThrow()
    expect(() => screen.getByText(/Reddit/i)).toThrow()
    expect(() => screen.getByText(/Youtube/i)).toThrow()
    expect(() => screen.getByText(/Wikipedia/i)).toThrow()
  })

  it('should render the upcoming launches pagined', async () => {
    render(
      <MockedProvider mocks={upcomingPaginedMock}>
        <Upcoming itemsPerPage={1} />
      </MockedProvider>,
    )

    await waitFor(() => new Promise((res) => setTimeout(res, 0)))
    const launchDateText = await screen.findAllByText(/Data de lançamento/)
    expect(launchDateText.length).toBe(1)

    const pagination = screen.getAllByTestId('pagination-testid')
    expect(pagination.length).toBe(2)
  })
})
