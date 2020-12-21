import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type ZoomImageProps = {
  image: string
}
const ZoomImage: React.FC<ZoomImageProps> = ({ image }) => {
  return (
    <Zoom
      overlayBgColorStart={'rgba(0,0,0,0.0)'}
      overlayBgColorEnd={'rgba(0,0,0,0.71)'}
    >
      <img alt={''} src={image} width={'100%'} />
    </Zoom>
  )
}
export default ZoomImage
