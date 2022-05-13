import s from '../Navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavFriendsContainer from "./NavFriends/NavFriendsContainer";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink} className={s.link}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink} className={s.link}>
                    Message
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink} className={s.link}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink} className={s.link}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.activeLink} className={s.link}>
                    Settings
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink} className={s.link}>
                    Users
                </NavLink>
            </div>
            <NavLink to="/friends" activeClassName={s.activeLink} className={s.navfriends}>
                <NavFriendsContainer/>
            </NavLink>
        </nav>
    )
}

export default Navbar;