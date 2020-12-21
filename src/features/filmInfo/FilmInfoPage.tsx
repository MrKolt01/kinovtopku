import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import filmInfo from './filmInfo'
import { observer } from 'mobx-react-lite'
import styles from './FilmInfoPage.module.scss'

import { MovieType } from '../../api/FilmsApi'
import Carousel from './Carousel'
import ActorsCloud from './ActorsCloud'

const FilmInfoPage = observer(() => {
  const { type } = useParams<{ type: MovieType }>()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    filmInfo.getInfo(type, Number(id))
  }, [type, id])

  return (
    <Container maxWidth={'md'}>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <img
            alt={filmInfo.film.title}
            className={styles.Image}
            src={filmInfo.film.image}
          />
        </Grid>
        <Grid item xs={9} sm={10}>
          <Typography variant="h6">{filmInfo.film.title}</Typography>
          <Typography variant="subtitle1" color={'primary'}>
            {filmInfo.film.releaseDate}
          </Typography>
        </Grid>
      </Grid>

      <Carousel />

      <Typography variant={'h6'} color={'primary'}>
        Описание:
      </Typography>
      <Typography>{filmInfo.film.overview}</Typography>

      <div>
        <Typography color={'primary'} variant={'h6'}>
          В главных ролях:
        </Typography>
        <ActorsCloud />
      </div>
    </Container>
  )
})

export default FilmInfoPage
