import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import FilmInfoPage from '../filmInfo/containers/FilmInfoPage'
import TopFilmsPage from '../topFilms/containers/TopFilmsPage'

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
