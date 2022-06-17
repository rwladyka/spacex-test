import React from 'react'
import { useAppContext } from 'hooks/useContext'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import Latest from 'components/Latest'

const Launches = (): JSX.Element => {
  const { typeLaunches } = useAppContext()

  switch (typeLaunches) {
    case TypeLaunches.LATEST:
      return <Latest />
    case TypeLaunches.NEXT:
    case TypeLaunches.PAST:
    case TypeLaunches.UPCOMING:
    default:
      return <p>Coming Soon</p>
  }

  return <div></div>
}

export default Launches
