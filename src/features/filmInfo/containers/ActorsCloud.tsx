import React, { useContext } from 'react'
import TagsCloud from '../components/TagsCloud'
import FilmInfoContext from '../FilmInfoContext'

const ActorsCloud = () => {
  const { actors } = useContext(FilmInfoContext)
  return (
    <TagsCloud
      tags={actors.map((actor) => ({
        label: `${actor.name} (${actor.character}) `,
        id: actor.id,
      }))}
    />
  )
}

export default ActorsCloud
