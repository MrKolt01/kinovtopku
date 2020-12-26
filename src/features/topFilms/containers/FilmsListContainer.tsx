import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FilmsList from '../components/FilmsList'
import TopFilmsContext from '../TopFilmsContext'

const FilmsListContainer = React.memo(() => {
  const { films, getTop } = useContext(TopFilmsContext)

  useEffect(() => {
    if (!films.length) {
      getTop()
    }
  }, [getTop])

  const history = useHistory()

  const onFilmClick = (type: string, id: number) => {
    history.push(`/info/${type}/${id}`)
  }

  return <FilmsList films={films} onFilmClick={onFilmClick} />
})

export default FilmsListContainer
