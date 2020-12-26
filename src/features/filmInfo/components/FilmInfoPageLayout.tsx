import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import Thumbnail from './Thumbnail'

type FilmInfoPageLayoutProps = {
  FilmCarousel: React.ReactNode
  Actors: React.ReactNode
  title: string
  overview: string
  date: string
  image: string
}

const FilmInfoPageLayout: React.FC<FilmInfoPageLayoutProps> = ({
  FilmCarousel,
  Actors,
  overview,
  title,
  date,
  image,
}) => {
  return (
    <Container maxWidth={'md'}>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <Thumbnail alt={title} src={image} />
        </Grid>
        <Grid item xs={9} sm={10}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1" color={'primary'}>
            {date}
          </Typography>
        </Grid>
      </Grid>
      {FilmCarousel}
      <Typography variant={'h6'} color={'primary'}>
        Описание:
      </Typography>
      <Typography>{overview}</Typography>
      <div>
        <Typography color={'primary'} variant={'h6'}>
          В главных ролях:
        </Typography>
        {Actors}
      </div>
    </Container>
  )
}

export default FilmInfoPageLayout
