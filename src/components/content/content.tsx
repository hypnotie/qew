import { FC } from 'react'
import styles from './content.module.scss'
import Feed from '../feed/feed'

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <main className={styles.content}>
      <Feed />
    </main>
  )
}

export default Content
