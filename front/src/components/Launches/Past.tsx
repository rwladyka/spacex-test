import { FC, useState } from 'react'
import { useQuery } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getPaginationQueryByType } from '../../graphql/queries'
import Loading from '../Loading'
import SpotList from './SpotList'
import { ITEMS_PER_PAGE } from 'utils/constraints'
import { PastType } from 'typing/Launch'

interface PastProps {
  itemsPerPage?: number
}

const Past: FC<PastProps> = ({ itemsPerPage = ITEMS_PER_PAGE }) => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery<PastType>(
    getPaginationQueryByType(TypeLaunches.PAST, itemsPerPage, page),
  )

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>
  if (!data) return null

  return (
    <>
      <SpotList
        launchList={data.past.launches}
        totalPages={Math.trunc(data.past.totalItems / itemsPerPage)}
        onPaging={(p: number) => setPage(p)}
        selectedPage={page}
      />
    </>
  )
}

export default Past
