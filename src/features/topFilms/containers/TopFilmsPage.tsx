import React from 'react'
import { Container } from '@material-ui/core'
import FilmsListContainer from '../containers/FilmsListContainer'
import FilmFilter from '../components/FilmFilter'
import { TopFilmsProvider } from '../TopFilmsContext'

const TopFilmsPage = React.memo(() => {
  return (
    <TopFilmsProvider>
      <Container maxWidth={'md'}>
        <FilmFilter />
        <FilmsListContainer />
      </Container>
    </TopFilmsProvider>
  )
})

export default TopFilmsPage
