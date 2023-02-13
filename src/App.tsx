import { FC } from 'react'

import Header from './components/header/header'
import Content from './components/content/content'
import Sidebar from './components/sidebar/sidebar'
import Container from './common/container/container'

import styles from './App.module.scss'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className={styles.content}>
          <Sidebar />
          <Content />
        </div>
      </Container>
    </div>
  )
}

export default App
