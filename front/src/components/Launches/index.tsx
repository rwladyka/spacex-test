import React from 'react'
import { useAppContext } from 'hooks/useContext'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import Latest from 'components/Launches/Latest'
import Next from './Next'
import Past from './Past'
import Upcoming from './Upcoming'

const Launches = (): JSX.Element => {
  const { typeLaunches } = useAppContext()

  switch (typeLaunches) {
    case TypeLaunches.LATEST:
      return <Latest />
    case TypeLaunches.NEXT:
      return <Next />
    case TypeLaunches.PAST:
      return <Past />
    case TypeLaunches.UPCOMING:
      return <Upcoming />
    default:
      return <p>Coming Soon</p>
  }
}

export default Launches
