import { useQuery } from '@apollo/client'
import { LATEST } from '../graphql/queries'
import Loading from './Loading'

const Latest = () => {
  const { loading, error, data } = useQuery(LATEST)

  console.log(error)

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  return (
    <div>
      <div key={data.latest.launchpad}>
        <p>{data.latest.name}</p>
      </div>
    </div>
  )
}

export default Latest
