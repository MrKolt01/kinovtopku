import React, { useCallback, useContext } from 'react'
import CustomSelect, { SelectItem } from '../../../components/CustomSelect'
import TopFilmsContext from '../TopFilmsContext'

let years: Array<SelectItem> = [{ value: 'Все', label: 'Все' }]
for (let i = 0; i < 100; i++) {
  const year = String(new Date().getFullYear() - i)
  years.push({ value: year, label: year })
}

const FilmYearFilter = () => {
  const { setYear, year } = useContext(TopFilmsContext)

  const onChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setYear(event.target.value as number)
    },
    [setYear]
  )

  return (
    <CustomSelect
      label={'Год'}
      value={year as string}
      items={years}
      onChange={onChange}
    />
  )
}

export default FilmYearFilter
