import React, { useCallback, useState } from 'react'
import { Actor, Film, FilmsApi, MovieType } from '../../api/FilmsApi'

export type FilmInfoContextType = {
  film: Film
  actors: Actor[]
  images: string[]
  clearInfo: () => void
  getInfo: (type: MovieType, id: number) => void
}

const InitialContext: FilmInfoContextType = {
  film: {
    type: 'movie',
    id: -1,
    title: '',
    overview: '',
    image: '',
    releaseDate: '',
  },
  actors: [],
  images: [],
  clearInfo: () => {},
  getInfo: () => {},
}

const FilmInfoContext = React.createContext<FilmInfoContextType>(InitialContext)

export const FilmInfoProvider: React.FC = ({ children }) => {
  const [film, setFilm] = useState<Film>({
    type: 'movie',
    id: -1,
    title: '',
    overview: '',
    image: '',
    releaseDate: '',
  })

  const [actors, setActors] = useState<Actor[]>([])

  const [images, setImages] = useState<string[]>([])

  const clearInfo = useCallback(() => {
    setFilm({
      type: 'movie',
      id: -1,
      title: '',
      overview: '',
      image: '',
      releaseDate: '',
    })
    setActors([])
    setImages([])
  }, [setActors, setFilm, setImages])

  const getInfo = useCallback(
    (type: MovieType, id: number) => {
      clearInfo()
      if (type === 'movie' || type === 'tv') {
        FilmsApi.getMovie(type, id).then((res: Film) => {
          setFilm(res)
        })
        FilmsApi.getImages(type, id).then((res: Array<string>) => {
          setImages(res)
        })
        FilmsApi.getCrew(type, id).then((res: Array<Actor>) => {
          setActors(res)
        })
      }
    },
    [setActors, setFilm, setImages, clearInfo]
  )

  return (
    <FilmInfoContext.Provider
      value={{
        film,
        actors,
        images,
        clearInfo,
        getInfo,
      }}
    >
      {children}
    </FilmInfoContext.Provider>
  )
}

export default FilmInfoContext
