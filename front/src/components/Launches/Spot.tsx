import { FC, useState, useEffect } from 'react'
import Box from 'components/Box'
import Image from './components/Image'
import Description from './components/Description'
import Title from './components/Title'
import { useIsMobile } from 'hooks/useIsMobile'

interface SpotProps {
  launch: any
}

const Spot: FC<SpotProps> = ({ launch }) => {
  const isMobile = useIsMobile()
  const [direction, setDirection] = useState<'column' | 'row'>('column')

  useEffect(() => setDirection(isMobile ? 'column' : 'row'), [isMobile])

  return (
    <Box direction="column">
      <Title title={launch.name} />
      <Box direction={direction}>
        {launch.links?.youtube_id && (
          <Image title={launch.name} youtubeId={launch.links.youtube_id} />
        )}
        <Description launch={launch} />
      </Box>
    </Box>
  )
}

export default Spot
