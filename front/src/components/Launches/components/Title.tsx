import React, { FC } from 'react'
import styled from 'styled-components'

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => (
  <TitleStyled
    className="rw-launch-spot-title"
    data-testid="rw-launch-spot-title-test-id">
    {title}
  </TitleStyled>
)

const TitleStyled = styled.h2`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin: 16px 0;
`

export default Title
