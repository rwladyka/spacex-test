import React, { FC } from 'react'
import styled from 'styled-components'
import Box from 'components/Box'

interface ItemDesciptionProps {
  title: string
  description: string
}

const ItemDesciption: FC<ItemDesciptionProps> = ({ title, description }) => {
  return (
    <Box padding="0 8px 8px">
      <StrongStyled>{title}: </StrongStyled>
      <div>{description}</div>
    </Box>
  )
}

const StrongStyled = styled.strong`
  font-weight: 600;
  margin-right: 5px;
`

export default ItemDesciption
