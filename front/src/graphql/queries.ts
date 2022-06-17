import { gql } from '@apollo/client'

const CORE_LAUNCHES_FIELD = `
  fragment CoreLaunchFields on Launch {
    launchpad
    name
    auto_update
    date_utc
    failures {
      altitude
      reason
      time
    }
    fairings {
      recovered
      recovery_attempt
      reused
    }
    flight_number
    rocket
    success
    upcoming
  }
`

export const LATEST = gql`
  ${CORE_LAUNCHES_FIELD}
  query {
    latest {
      ...CoreLaunchFields
    }
  }
`
export const NEXT = gql`
  ${CORE_LAUNCHES_FIELD}
  query {
    next {
      ...CoreLaunchFields
    }
  }
`

export const PAST = gql`
  ${CORE_LAUNCHES_FIELD}
  query {
    past {
      ...CoreLaunchFields
    }
  }
`

export const UPCOMING = gql`
  ${CORE_LAUNCHES_FIELD}
  query {
    upcoming {
      ...CoreLaunchFields
    }
  }
`
