import { NavLink } from "react-router-dom";
import { routes } from "../../../App";
import s from '../Navbar.module.css'

type Props = {
    name:string
    route:string
};
export const NavItem = ({name,route}: Props) => {
    return (
        <li>
            <NavLink to={route} className={({isActive}) =>
    isActive ? s.active : ""
  }>{name}</NavLink>
            </li>
    );
};