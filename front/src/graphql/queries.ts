import { gql } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'

const CORE_LAUNCHES_FIELD = `
  fragment CoreLaunchFields on Launch {
    launchpad
    name
    date_utc
    flight_number
    links {
      webcast
      wikipedia
      youtube_id
      reddit {
        launch
      }
      patch {
        small
      }
    }
  }
`

export const getQueryByType = (type: TypeLaunches) =>
  gql`
    ${CORE_LAUNCHES_FIELD}
    query {
      ${type} {
        ...CoreLaunchFields
      }
    }
  `

export const getPaginationQueryByType = (
  type: TypeLaunches,
  limit = 5,
  page = 1,
) =>
  gql`
    ${CORE_LAUNCHES_FIELD}
    query {
      ${type}(limit: ${limit}, page: ${page}){
        launches {
          ...CoreLaunchFields
        }
        totalItems
      }
    }
  `
