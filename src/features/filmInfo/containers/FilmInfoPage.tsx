import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieType } from '../../../api/FilmsApi'
import FilmInfoPageLayout from '../components/FilmInfoPageLayout'
import FilmCarousel from './FilmCarousel'
import ActorsCloud from './ActorsCloud'
import FilmInfoContext, { FilmInfoProvider } from '../FilmInfoContext'

const FilmInfoPage = React.memo(() => {
  const { type } = useParams<{ type: MovieType }>()
  const { id } = useParams<{ id: string }>()

  const { film, getInfo } = useContext(FilmInfoContext)

  useEffect(() => {
    getInfo(type, Number(id))
  }, [type, id, getInfo])

  return (
    <FilmInfoPageLayout
      FilmCarousel={<FilmCarousel />}
      Actors={<ActorsCloud />}
      title={film.title}
      overview={film.overview}
      date={film.releaseDate}
      image={film.image}
    />
  )
})

const ConnectedFilmInfoPage = () => (
  <FilmInfoProvider>
    <FilmInfoPage />
  </FilmInfoProvider>
)

export default ConnectedFilmInfoPage
