import { NavLink } from 'react-router-dom'
import { routes } from '../../App'
import s from './Navbar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
        <ul>
          <li>
            <NavLink to={routes.profile} className={({isActive}) =>
    isActive ? s.active : ""
  }>Profile</NavLink>
            </li>
          <li>
            <NavLink to={routes.messages} className={({isActive}) =>
    isActive ? s.active : ""
  }>Messages</NavLink>
            </li>
          <li>
            <NavLink to={routes.news} className={({isActive}) =>
    isActive ? s.active : ""
  }>News</NavLink>
            </li>
          <li>
            <NavLink to={routes.music} className={({isActive}) =>
    isActive ? s.active : ""
  }>Music</NavLink>
            </li>
          <li>
            <NavLink to={routes.settings} className={({isActive}) =>
    isActive ? s.active : ""
  }>Settings</NavLink>
            </li>
        </ul>
      </nav>
    )
}