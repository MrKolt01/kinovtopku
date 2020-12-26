import React, { useContext } from 'react'
import Carousel from '../components/Carousel'
import FilmInfoContext from '../FilmInfoContext'

const FilmCarousel = () => {
  const { images } = useContext(FilmInfoContext)
  return <Carousel images={images} />
}

export default FilmCarousel
