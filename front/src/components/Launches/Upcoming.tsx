import { useQuery } from '@apollo/client'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import { getQueryByType } from '../../graphql/queries'
import Loading from '../Loading'
import Spot from './Spot'

const Upcoming = () => {
  const { loading, error, data } = useQuery(
    getQueryByType(TypeLaunches.UPCOMING),
  )

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  return (
    <>
      {data.upcoming.map((launch: any, index: number) => (
        <Spot launch={launch} key={index} />
      ))}
    </>
  )
}

export default Upcoming
