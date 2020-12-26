import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import styles from './Carousel.module.scss'

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

type CarouselProps = {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <>
      {images.length ? (
        <div className={styles.Carousel}>
          <div className={styles.Inner}>
            {images.map((image) => {
              return (
                <div className={styles.Image} key={image}>
                  <ZoomImage image={image} />
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Carousel
