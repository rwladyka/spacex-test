import { useQuery } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getQueryByType } from 'graphql/queries'
import Loading from '../Loading'
import Spot from './Spot'
import { NextType } from 'typing/Launch'
import Error from 'components/Error'

const Next = () => {
  const { loading, error, data } = useQuery<NextType>(
    getQueryByType(TypeLaunches.NEXT),
  )

  if (loading) return <Loading />
  if (error) return <Error />

  return <Spot launch={data?.next} />
}

export default Next
