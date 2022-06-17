import React, { FC } from 'react'
import styled from 'styled-components'

interface MenuItemProps {
  text: string
  onClick: () => void
}

const MenuItem: FC<MenuItemProps> = ({ text, onClick }): JSX.Element => (
  <ItemStyled onClick={onClick}>{text}</ItemStyled>
)

const ItemStyled = styled.div`
  padding: 8px 16px;
  margin: 4px 8px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`

export default MenuItem
