import React from 'react'
import filmInfo from './filmInfo'
import { Actor } from '../../api/FilmsApi'
import { Chip } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import styles from './ActorsCloud.module.scss'

const ActorsCloud = observer(() => {
  return (
    <div className={styles.Container}>
      {filmInfo.actors.map((actor: Actor) => {
        return (
          <Chip
            className={styles.Chip}
            variant={'outlined'}
            label={`${actor.name} (${actor.character}) `}
            key={actor.id}
          />
        )
      })}
    </div>
  )
})

export default ActorsCloud
