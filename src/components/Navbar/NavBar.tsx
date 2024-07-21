import { NavLink } from 'react-router-dom'
import { routes } from '../../App'
import s from './Navbar.module.css'
import { NavItem } from './NavItem/NavItem'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
        <ul>
          <NavItem name='Profile' route={routes.profile}/>
          <NavItem name='Messages' route={routes.messages}/>
          <NavItem name='News' route={routes.news}/>
          <NavItem name='Music' route={routes.music}/>
          <NavItem name='Settings' route={routes.settings}/>
        </ul>
      </nav>
    )
}