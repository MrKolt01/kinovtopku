import { makeAutoObservable } from 'mobx'
import { Actor, Film, FilmsApi, MovieType } from '../../api/FilmsApi'

class FilmInfo {
  film: Film = {
    type: 'movie',
    id: -1,
    title: '',
    overview: '',
    image: '',
    releaseDate: '',
  }

  actors: Array<Actor> = []

  images: Array<string> = []

  constructor() {
    makeAutoObservable(this)
  }

  clearInfo() {
    this.film = {
      type: 'movie',
      id: -1,
      title: '',
      overview: '',
      image: '',
      releaseDate: '',
    }

    this.actors = []

    this.images = []
  }

  getInfo(type: MovieType, id: number) {
    this.clearInfo()
    if (type === 'movie' || type === 'tv') {
      FilmsApi.getMovie(type, id).then((res: Film) => {
        this.film = res
      })
      FilmsApi.getImages(type, id).then((res: Array<string>) => {
        this.images = res
      })
      FilmsApi.getCrew(type, id).then((res: Array<Actor>) => {
        this.actors = res
      })
    }
  }
}

export default new FilmInfo()
