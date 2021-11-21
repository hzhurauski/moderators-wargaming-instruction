import React, { FC } from 'react'
import { withUserAgent } from 'react-useragent'
import { UaType } from 'types/Types'

type PropsType = {
  width: string
  height: string
  alt: string
  src: string
  ua: UaType
}

const Image: FC<PropsType> = ({ width, height, src, alt, ua }) => {
  if (ua.mobile) {
    width = String(Number(width) / 2)
    height = String(Number(height) / 2)
  }

  return (
    <div>
      <img src={src} width={width} height={height} alt={alt} />
    </div>
  )
}

export default withUserAgent(Image)
