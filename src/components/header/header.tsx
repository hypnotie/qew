import { FC } from 'react'
import styles from './header.module.scss'
import logo from '../../assets/images/header/logo.png'
import author from '../../assets/images/post/author.jpg'
import { Link } from 'react-router-dom'
import Container from './../../common/container/container'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.headerLeft}>
            <img src={logo} alt="qew" />
            <h1>qew</h1>
          </Link>
          <div className={styles.headerRight}>
            <img src={author} alt="qew" />
            <p>Максим Гангало</p>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
