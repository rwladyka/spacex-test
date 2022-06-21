import { useQuery } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getQueryByType } from 'graphql/queries'
import Loading from '../Loading'
import Spot from './Spot'

const Next = () => {
  const { loading, error, data } = useQuery<NextType>(
    getQueryByType(TypeLaunches.NEXT),
  )

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  return <Spot launch={data?.next} />
}

export default Next
