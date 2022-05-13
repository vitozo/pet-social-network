import s from "./Users.module.css";
import userPhoto from "../../assets/images/photo-img.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    return (
        <div>
            <ul className={s.usersList}>
                <li className={s.usersItem}>
                    <div className={s.columnLeft}>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={s.img} alt={'ava'}/>
                            </NavLink>
                        </div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                          //     withCredentials: true,
                                          //     headers: {
                                          //         "API-KEY": "a032575c-51f3-45f5-ac29-ac97dd432588"
                                          //     }
                                          // })
                                          // props.toggleFollowingProgress(true, user.id);
                                          // usersAPI.unfollow(user.id).then(response => {
                                          //     if (response.data.resultCode == 0) {
                                          //         props.unfollow(user.id)
                                          //     }
                                          //     props.toggleFollowingProgress(false, user.id);
                                          // });
                                          props.unfollow(user.id);
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                          //                                         //     withCredentials: true,
                                          //                                         //     headers: {
                                          //                                         //         "API-KEY": "a032575c-51f3-45f5-ac29-ac97dd432588"
                                          //                                         //     }
                                          //                                         // })
                                          // props.toggleFollowingProgress(true, user.id);
                                          // usersAPI.follow(user.id).then(response => {
                                          //     if (response.data.resultCode == 0) {
                                          //         props.follow(user.id)
                                          //     }
                                          //     props.toggleFollowingProgress(false, user.id);
                                          // });
                                          props.follow(user.id);
                                      }}>Follow</button>
                        }
                    </div>
                    <div className={s.columnRight}>
                        <div>
                            <div className={s.fullName}>
                                {user.name}
                            </div>
                            <div className={s.status}>
                                {user.status}
                            </div>
                        </div>
                        <div className={s.location}>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.cityName'}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>


    )
};

export default User;