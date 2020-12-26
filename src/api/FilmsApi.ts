import { ApiConnect } from './config/ApiConnect'
import popcorn from '../components/popcorn.svg'

export type MovieType = 'movie' | 'tv'

export type Film = {
  type: string
  id: number
  title: string
  overview: string
  image: string
  releaseDate: string
}

type FilmJson = {
  id: number
  overview: string
  poster_path: string
  title?: string
  name?: string
  release_date: string
}

type MoviesResponse = {
  data: {
    results: Array<FilmJson>
  }
}

type TVJson = {
  id: number
  overview: string
  poster_path: string
  title?: string
  name?: string
  first_air_date: string
}

type TVResponse = {
  data: {
    results: Array<TVJson>
  }
}

export type Actor = {
  name: string
  character: string
  id: string
}

export const FilmsApi = {
  getTopMovies(year: number | 'Все' = 'Все') {
    const url =
      year !== 'Все'
        ? `/discover/movie?language=ru&primary_release_year=${year}&vote_count.gte=1000&sort_by=vote_average.asc&api_key=fad449b4762ae26d202be6469ecacd5e`
        : `/discover/movie?language=ru&sort_by=vote_average.asc&vote_count.gte=1000&api_key=fad449b4762ae26d202be6469ecacd5e`
    return ApiConnect.get(url).then((res: MoviesResponse) => {
      return res.data.results.slice(0, 10).map((film) => ({
        type: 'movie',
        id: film.id,
        title: film.title || film.name || '',
        overview: film.overview,
        image: film.poster_path
          ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
          : popcorn,
        releaseDate: film.release_date,
      }))
    })
  },
  getTopTV(year: number | 'Все' = 'Все') {
    const url =
      year !== 'Все'
        ? `/discover/tv?language=ru&vote_count.gte=150&first_air_date_year=${year}&sort_by=vote_average.asc&vote_count.gte=1000&api_key=fad449b4762ae26d202be6469ecacd5e`
        : `/discover/tv?language=ru&vote_count.gte=150&sort_by=vote_average.asc&api_key=fad449b4762ae26d202be6469ecacd5e`
    return ApiConnect.get(url).then((res: TVResponse) => {
      return res.data.results.slice(0, 10).map((film) => ({
        type: 'tv',
        id: film.id,
        title: film.title || film.name || '',
        overview: film.overview,
        image: film.poster_path
          ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
          : popcorn,
        releaseDate: film.first_air_date,
      }))
    })
  },
  getMovie(type: MovieType, id: number) {
    return ApiConnect.get(
      `/${type}/${id}?language=ru&api_key=fad449b4762ae26d202be6469ecacd5e`
    ).then((res: any) => {
      return {
        type: type,
        id: res.data.id,
        title: res.data.title || res.data.name || '',
        overview: res.data.overview,
        image: res.data.poster_path
          ? `https://image.tmdb.org/t/p/w300${res.data.poster_path}`
          : popcorn,
        releaseDate: res.data.release_date || res.data.first_air_date,
      }
    })
  },
  getImages(type: MovieType, id: number) {
    return ApiConnect.get(
      `/${type}/${id}/images?api_key=fad449b4762ae26d202be6469ecacd5e`
    ).then((res: any) => {
      return res.data.backdrops.map(
        (el: { file_path: string }) =>
          `https://image.tmdb.org/t/p/w780${el.file_path}`
      )
    })
  },
  getCrew(type: MovieType, id: number) {
    return ApiConnect.get(
      `/${type}/${id}/credits?language=ru&api_key=fad449b4762ae26d202be6469ecacd5e`
    ).then((res: { data: { cast: Array<Actor> } }) => {
      return res.data.cast.slice(0, 10)
    })
  },
}
