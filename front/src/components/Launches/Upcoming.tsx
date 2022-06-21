import { useQuery } from '@apollo/client'
import { FC, useState } from 'react'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getPaginationQueryByType } from '../../graphql/queries'
import Loading from '../Loading'
import SpotList from './SpotList'
import { ITEMS_PER_PAGE } from 'utils/constraints'
import { UpcomingType } from 'typing/Launch'
import Error from 'components/Error'

interface UpcomingProps {
  itemsPerPage?: number
}

const Upcoming: FC<UpcomingProps> = ({ itemsPerPage = ITEMS_PER_PAGE }) => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery<UpcomingType>(
    getPaginationQueryByType(TypeLaunches.UPCOMING, itemsPerPage, page),
  )

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return null

  return (
    <SpotList
      launchList={data.upcoming.launches}
      totalPages={Math.trunc(data.upcoming.totalItems / itemsPerPage)}
      onPaging={(p: number) => setPage(p)}
      selectedPage={page}
    />
  )
}

export default Upcoming
