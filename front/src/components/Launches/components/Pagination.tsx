import React, { FC } from 'react'
import styled from 'styled-components'

interface PaginationProps {
  totalPages: number
  onClick: (page: number) => void
  selectedPage: number
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  onClick,
  selectedPage,
}) => {
  if (totalPages < 2) return null

  return (
    <PaginationStyle>
      {Array.from(new Array(Math.trunc(totalPages))).map((_, index: number) => (
        <PaginationItemStyle
          onClick={() => onClick(index + 1)}
          selected={selectedPage === index + 1}>
          {index + 1}
        </PaginationItemStyle>
      ))}
    </PaginationStyle>
  )
}

interface PaginationItemStyleProps {
  selected: boolean
}

const PaginationItemStyle = styled.div<PaginationItemStyleProps>`
  cursor: pointer;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 5px;
  background: ${(p) => (p.selected ? '#333' : '#fff')};
  margin: 8px;
  color: ${(p) => (p.selected ? '#fff' : '#333')};
`

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
`

export default Pagination
