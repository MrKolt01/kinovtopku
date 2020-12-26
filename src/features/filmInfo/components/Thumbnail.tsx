import React from 'react'
import styles from './Thumbnail.module.scss'

type ThumbnailProps = {
  alt: string
  src: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ alt, src }) => (
  <img alt={alt} className={styles.Image} src={src} />
)

export default Thumbnail
