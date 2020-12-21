import React from 'react'
import { Container } from '@material-ui/core'
import FilmsList from './FilmsList'
import Filter from './Filter'

const TopFilmsPage = () => {
  return (
    <Container maxWidth={'md'}>
      <Filter />
      <FilmsList />
    </Container>
  )
}

export default TopFilmsPage
