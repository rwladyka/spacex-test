import { useQuery } from '@apollo/client'
import { useState } from 'react'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getPaginationQueryByType } from '../../graphql/queries'
import Loading from '../Loading'
import SpotList from './SpotList'
import { ITEMS_PER_PAGE } from 'utils/constraints'

const Upcoming = () => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(
    getPaginationQueryByType(TypeLaunches.UPCOMING, ITEMS_PER_PAGE, page),
  )

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  return (
    <SpotList
      launchList={data.upcoming.launches}
      totalPages={Math.trunc(data.upcoming.totalItems / ITEMS_PER_PAGE)}
      onPaging={(p: number) => setPage(p)}
      selectedPage={page}
    />
  )
}

export default Upcoming
