import React from 'react';
import s from '../Header/Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.img}>
                <img src="https://pngimage.net/wp-content/uploads/2018/06/sample-logo-png-6.png" alt="Лого"/>
            </div>
            <div className={s.right}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout} >logout</button></div>
                    : <NavLink to={'/login'} className={s.link}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;