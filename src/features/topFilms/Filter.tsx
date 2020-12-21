import React from 'react'
import { observer } from 'mobx-react-lite'
import topFilms from './topFilms'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import { MovieType } from '../../api/FilmsApi'

const Filter = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <YearFilter />
      </Grid>
      <Grid item xs>
        <TypeFilter />
      </Grid>
    </Grid>
  )
}

let years: Array<number | string> = ['Все']
for (let i = 0; i < 100; i++) {
  years.push(new Date().getFullYear() - i)
}

const YearFilter = observer(() => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    topFilms.setYear(event.target.value as number)
  }

  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel>Год</InputLabel>
      <Select value={topFilms.year} onChange={handleChange}>
        {years.map((year) => {
          return (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
})

const TypeFilter = observer(() => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    topFilms.setType(event.target.value as MovieType)
  }

  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel>Тип</InputLabel>
      <Select value={topFilms.type} onChange={handleChange}>
        <MenuItem value={'movie'}>Фильм</MenuItem>
        <MenuItem value={'tv'}>Сериал</MenuItem>
      </Select>
    </FormControl>
  )
})

export default Filter
