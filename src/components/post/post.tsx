import { FC } from 'react'
import styles from './post.module.scss'
import author from '../../assets/images/post/author.jpg'
import answers from '../../assets/images/post/answers.png'

interface PostProps {}

const Post: FC<PostProps> = () => {
  return (
    <article className={styles.post}>
      <div className={styles.top}>
        <div className={styles.header}>
          <h2>Який телефон кращий?</h2>
          <p className={styles.time}>2 год.</p>
        </div>
        <p className={styles.text}>
          Нещодавно вирішив обрати собі новий телефон, але ще не визначився,
          який саме. Що можете порекомендувати?
        </p>
        <hr />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <img src={author} alt="Author" />
          <h4>Максим Гангало</h4>
        </div>
        <div className={styles.bottomRight}>
          <img src={answers} alt="Answers" />
          <p>0 відповідей</p>
        </div>
      </div>
    </article>
  )
}

export default Post
