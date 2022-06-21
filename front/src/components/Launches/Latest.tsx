import { useQuery } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getQueryByType } from 'graphql/queries'
import Loading from '../Loading'
import Spot from './Spot'
import { LatestType } from 'typing/Launch'

const Latest = () => {
  const { loading, error, data } = useQuery<LatestType>(
    getQueryByType(TypeLaunches.LATEST),
  )

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  return <Spot launch={data?.latest} />
}

export default Latest
