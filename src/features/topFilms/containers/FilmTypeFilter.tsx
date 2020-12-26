import React, { useCallback, useContext } from 'react'
import { MovieType } from '../../../api/FilmsApi'
import CustomSelect from '../../../components/CustomSelect'
import TopFilmsContext from '../TopFilmsContext'

const filmTypes = [
  { value: 'movie', label: 'Фильм' },
  { value: 'tv', label: 'Сериал' },
]

const FilmTypeFilter = () => {
  const { type, setType } = useContext(TopFilmsContext)

  const onChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setType(event.target.value as MovieType)
    },
    [setType]
  )

  return (
    <CustomSelect
      label={'Тип'}
      value={type}
      items={filmTypes}
      onChange={onChange}
    />
  )
}

export default FilmTypeFilter
