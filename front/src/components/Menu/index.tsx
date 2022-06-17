import styled from 'styled-components'
import MenuItem from './MenuItem'
import { useAppContext } from 'hooks/useContext'
import TypeLaunches from 'utils/TypeLaunchesEnum'
import Box from 'components/Box'

const Menu = (): JSX.Element => {
  const { setTypeLaunches } = useAppContext()

  return (
    <Box>
      <MenuStyled>
        <MenuItem
          text="Latest Launch"
          onClick={() => setTypeLaunches(TypeLaunches.LATEST)}
        />
        <MenuItem
          text="Next Launch"
          onClick={() => setTypeLaunches(TypeLaunches.NEXT)}
        />
        <MenuItem
          text="Past Launches"
          onClick={() => setTypeLaunches(TypeLaunches.PAST)}
        />
        <MenuItem
          text="Upcoming Launches"
          onClick={() => setTypeLaunches(TypeLaunches.UPCOMING)}
        />
      </MenuStyled>
    </Box>
  )
}

const MenuStyled = styled.div`
  margin: 32px 16px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default Menu
