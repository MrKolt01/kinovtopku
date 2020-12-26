import React from 'react'
import { Grid } from '@material-ui/core'
import FilmYearFilter from '../containers/FilmYearFilter'
import FilmTypeFilter from '../containers/FilmTypeFilter'

const FilmFilter = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <FilmYearFilter />
      </Grid>
      <Grid item xs>
        <FilmTypeFilter />
      </Grid>
    </Grid>
  )
}

export default FilmFilter
