import React from 'react'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import styles from './FilmsList.module.scss'
import { Film } from '../../../api/FilmsApi'

type FilmThumbProps = {
  title: string
  url: string
}
const FilmThumb: React.FC<FilmThumbProps> = ({ title, url }) => (
  <Grid item sm={2} container className={styles.ImageWrapper}>
    <img alt={title} className={styles.Image} src={url} />
  </Grid>
)

type FilmInfoProps = {
  title: string
  date: string
  overview: string
  onMoreInfoClick: () => void
}

const FilmInfo: React.FC<FilmInfoProps> = ({
  title,
  date,
  overview,
  onMoreInfoClick,
}) => (
  <Grid item sm={10} className={styles.Info}>
    <Typography variant="h6" className={styles.Title}>
      {title}
    </Typography>
    <Typography color="primary" variant="body1" className={styles.Date}>
      {date}
    </Typography>
    <Typography variant="body1" className={styles.Overview}>
      {overview}
    </Typography>
    <Button onClick={onMoreInfoClick} className={styles.MoreButton}>
      Подробнее
    </Button>
  </Grid>
)

type FilmsListItemProps = {
  film: Film
  onFilmClick: (type: string, id: number) => void
}

const FilmListItem: React.FC<FilmsListItemProps> = ({ film, onFilmClick }) => (
  <Paper className={styles.Film}>
    <Grid container>
      <FilmThumb title={film.title} url={film.image} />
      <FilmInfo
        title={film.title}
        date={film.releaseDate}
        overview={film.overview}
        onMoreInfoClick={() => onFilmClick(film.type, film.id)}
      />
    </Grid>
  </Paper>
)

type FilmsListProps = {
  films: Film[]
  onFilmClick: (type: string, id: number) => void
}

const FilmsList: React.FC<FilmsListProps> = ({ films, onFilmClick }) => {
  return (
    <div>
      {films.map((film, idx) => (
        <FilmListItem
          film={{ ...film, title: `${idx + 1}. ${film.title}` }}
          onFilmClick={onFilmClick}
          key={film.id}
        />
      ))}
    </div>
  )
}

export default FilmsList
