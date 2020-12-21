import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import topFilms from './topFilms'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styles from './FilmsList.module.scss'

const FilmsList = observer(() => {
  useEffect(() => {
    if (!topFilms.films.length) {
      topFilms.getTop()
    }
  }, [])

  const history = useHistory()

  const onFilmClick = (type: string, id: number) => {
    history.push(`/info/${type}/${id}`)
  }

  return (
    <div>
      {topFilms.films.map((film, idx) => (
        <Paper className={styles.Film} key={film.id}>
          <Grid container>
            <Grid item sm={2} container className={styles.ImageWrapper}>
              <img alt={film.title} className={styles.Image} src={film.image} />
            </Grid>
            <Grid item sm={10} className={styles.Info}>
              <Typography variant="h6" className={styles.Title}>
                {`${idx + 1}. ${film.title}`}
              </Typography>
              <Typography
                color="primary"
                variant="body1"
                className={styles.Date}
              >
                {film.releaseDate}
              </Typography>
              <Typography variant="body1" className={styles.Overview}>
                {film.overview}
              </Typography>
              <Button
                onClick={() => onFilmClick(film.type, film.id)}
                className={styles.MoreButton}
              >
                Подробнее
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  )
})

export default FilmsList
