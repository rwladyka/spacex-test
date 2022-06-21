import { useQuery } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getQueryByType } from 'graphql/queries'
import Loading from '../Loading'
import Spot from './Spot'
import { LatestType } from 'typing/Launch'
import Error from 'components/Error'

const Latest = () => {
  const { loading, error, data } = useQuery<LatestType>(
    getQueryByType(TypeLaunches.LATEST),
  )

  if (loading) return <Loading />
  if (error) return <Error />

  return <Spot launch={data?.latest} />
}

export default Latest
