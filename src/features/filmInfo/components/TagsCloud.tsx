import React from 'react'
import styles from './TagsCloud.module.scss'
import { Chip } from '@material-ui/core'

type TagProps = {
  label: string
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return <Chip className={styles.Tag} variant={'outlined'} label={label} />
}

type TagType = {
  id: string
  label: string
}

type TagsCloudProps = {
  tags: TagType[]
}

const TagsCloud: React.FC<TagsCloudProps> = ({ tags }) => {
  return (
    <div className={styles.TagsCloud}>
      {tags.map((tag) => {
        return <Tag label={tag.label} key={tag.id} />
      })}
    </div>
  )
}

export default TagsCloud
