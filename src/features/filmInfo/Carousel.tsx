import React from 'react'
import filmInfo from './filmInfo'
import ZoomImage from './ZoomImage'
import styles from './Carousel.module.scss'
import { observer } from 'mobx-react-lite'

const Carousel = observer(() => {
  return (
    <>
      {filmInfo.images.length ? (
        <div className={styles.Carousel}>
          <div className={styles.Inner}>
            {filmInfo.images.map((el) => {
              return (
                <div className={styles.Image} key={el}>
                  <ZoomImage image={el} />
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
})

export default Carousel
