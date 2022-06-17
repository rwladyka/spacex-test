import React, { FC } from 'react'

interface ImageProps {
  youtubeId: string
  title: string
}

const Image: FC<ImageProps> = ({ youtubeId, title }) => {
  return (
    <div>
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        title={title}
        alt={title}
        width="100%"
      />
    </div>
  )
}

export default Image
