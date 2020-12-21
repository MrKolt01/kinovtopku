import { makeAutoObservable } from 'mobx'
import { Film, FilmsApi, MovieType } from '../../api/FilmsApi'

class TopFilms {
  films: Array<Film> = []
  year: number | 'Все' = 'Все'
  type: MovieType = 'movie'

  constructor() {
    makeAutoObservable(this)
  }

  setYear(year: number) {
    this.year = year
    this.getTop()
  }

  setType(type: MovieType) {
    this.type = type
    this.getTop()
  }

  getTop() {
    if (this.type === 'movie') {
      FilmsApi.getTopMovies(this.year).then((res: Array<Film>) => {
        this.films = res
      })
    } else {
      FilmsApi.getTopTV(this.year).then((res: Array<Film>) => {
        this.films = res
      })
    }
  }
}

export default new TopFilms()
