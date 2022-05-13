import React from "react";
import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {

    return (
        <div className={s.friendsItem}>
            <div className={s.image}>
                <img className={s.img} src="#s" alt=""/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    )
}

export default FriendsItem;