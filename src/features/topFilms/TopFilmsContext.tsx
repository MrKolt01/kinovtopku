import React, { useCallback, useState } from 'react'
import { Film, FilmsApi, MovieType } from '../../api/FilmsApi'

export type TopFilmsContextType = {
  films: Film[]
  year: number | 'Все'
  type: MovieType
  setYear: (year: number | 'Все') => void
  setType: (type: MovieType) => void
  getTop: () => void
}

const InitialContext: TopFilmsContextType = {
  films: [],
  year: 'Все',
  type: 'movie',
  setYear: () => {},
  setType: () => {},
  getTop: () => {},
}

const TopFilmsContext = React.createContext<TopFilmsContextType>(InitialContext)

export const TopFilmsProvider: React.FC = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([])
  const [year, changeYear] = useState<number | 'Все'>('Все')
  const [type, changeType] = useState<MovieType>('movie')

  const setYear = useCallback(
    (year: number | 'Все') => {
      changeYear(year)
      getTop()
    },
    [changeYear]
  )

  const setType = useCallback(
    (type: MovieType) => {
      changeType(type)
      getTop()
    },
    [changeType]
  )

  const getTop = useCallback(() => {
    setFilms([])
    if (type === 'movie') {
      FilmsApi.getTopMovies(year).then((res: Array<Film>) => {
        setFilms(res)
      })
    } else {
      FilmsApi.getTopTV(year).then((res: Array<Film>) => {
        setFilms(res)
      })
    }
  }, [setFilms, type, year])

  return (
    <TopFilmsContext.Provider
      value={{
        films,
        year,
        type,
        getTop,
        setType,
        setYear,
      }}
    >
      {children}
    </TopFilmsContext.Provider>
  )
}

export default TopFilmsContext
