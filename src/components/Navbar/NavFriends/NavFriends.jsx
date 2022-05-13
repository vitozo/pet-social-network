import React from 'react';
import s from './NavFriends.module.css'
import FriendsItem from "../../Friends/FriendsItem/FriendsItem";

const NavFriends = (props) => {
    let friendsElements =
        props.sidebar.friends.map((n) => {
            return  <FriendsItem name={n.name} key={n.id}/>
        });

    return (
        <div className={s.friends}>
            <div className={s.title}>
                Friends
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <div className={s.items}>
                        {friendsElements}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NavFriends;