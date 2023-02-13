import { FC } from 'react'
import styles from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'

const username = 'hypnotie'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <NavLink to="/">Головна</NavLink>
        </li>
        <li>
          <NavLink to={`/${username}/questions`}>Мої питання</NavLink>
        </li>
        <li>
          <NavLink to={`/${username}/answers`}>Мої відповіді</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
