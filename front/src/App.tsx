import React, { useState } from 'react'
import { AppContext } from './hooks/useContext'
import Container from 'components/Container'
import Menu from 'components/Menu'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import Launches from 'components/Launches'

function App() {
  const [typeLaunches, setTypeLaunches] = useState(TypeLaunches.LATEST)

  return (
    <AppContext.Provider value={{ typeLaunches, setTypeLaunches }}>
      <Container>
        <Menu />
        <Launches />
      </Container>
    </AppContext.Provider>
  )
}

export default App
