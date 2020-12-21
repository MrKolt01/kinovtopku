import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import TopFilmsPage from '../topFilms/TopFilmsPage'
import FilmInfoPage from '../filmInfo/FilmInfoPage'

const PageSwitcher = () => {
  return (
    <Switch>
      <Route path={'/info/:type/:id'}>
        <FilmInfoPage />
      </Route>
      <Route exact path={'/'}>
        <TopFilmsPage />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  )
}

export default PageSwitcher
