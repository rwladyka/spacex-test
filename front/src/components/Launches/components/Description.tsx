import React, { FC } from 'react'
import Box from 'components/Box'
import styled from 'styled-components'
import moment from 'moment'
import ItemDesciption from './ItemDesciption'

interface DescriptionProps {
  launch: any
}

const hasLink = ({ links }: any) =>
  links?.reddit?.launch || links?.webcast || links?.wikipedia

const Description: FC<DescriptionProps> = ({ launch }) => {
  const date = moment(launch.date_utc)
  return (
    <Box direction="column" padding="0 8px">
      <ItemDesciption
        title="Número do Voo"
        description={launch.flight_number}
      />
      <ItemDesciption
        title="Data de lançamento"
        description={date.format('DD/MM/yyyy')}
      />
      <ItemDesciption
        title="Hora de lançamento (UTC)"
        description={date.format('HH:mm')}
      />
      {hasLink(launch) && (
        <Box direction="column">
          <SubtitleStyled>Links</SubtitleStyled>
          <Box>
            {launch.links?.reddit?.launch && (
              <LinkStyled href={launch.links.reddit.launch} target="_blank">
                Reddit
              </LinkStyled>
            )}
            {launch.links?.webcast && (
              <LinkStyled href={launch.links.webcast} target="_blank">
                YouTube
              </LinkStyled>
            )}
            {launch.links?.wikipedia && (
              <LinkStyled href={launch.links.wikipedia} target="_blank">
                Wikipedia
              </LinkStyled>
            )}
          </Box>
        </Box>
      )}
      {launch.links?.patch?.small && (
        <Box direction="column">
          <SubtitleStyled>Logo</SubtitleStyled>
          <Box>
            <img src={launch.links.patch.small} width="140" />
          </Box>
        </Box>
      )}
    </Box>
  )
}

const SubtitleStyled = styled.strong`
  font-weight: 600;
  margin-right: 5px;
  font-size: 14px;
`

const LinkStyled = styled.a`
  text-transform: uppercase;
  color: navy;
  margin: 6px 6px 0;
  text-decoration: none;
`

export default Description
