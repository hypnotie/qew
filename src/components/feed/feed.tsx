import { FC } from 'react'
import styles from './feed.module.scss'
import Post from '../post/post'

interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  return (
    <div className={styles.feed}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
