import React, { FC } from 'react'
import Pagination from './components/Pagination'
import Spot from './Spot'
import { Launch } from 'typing/Launch'

interface SpotListProps {
  launchList: Launch[]
  totalPages: number
  selectedPage: number
  onPaging: (page: number) => void
}

const SpotList: FC<SpotListProps> = ({
  launchList,
  totalPages,
  onPaging,
  selectedPage,
}) => {
  return (
    <>
      <Pagination
        totalPages={totalPages}
        onClick={onPaging}
        selectedPage={selectedPage}
      />
      <div
        style={{
          display: 'flex',
          width: '100%',
          overflow: 'auto',
        }}>
        {launchList.map((launch: any, index: number) => (
          <Spot launch={launch} key={index} />
        ))}
      </div>
    </>
  )
}

export default SpotList
