import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return (
        <div className={s.users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalItemsCount={totalUsersCount}/>
            <div>
                {
                    props.users.map(u => <User key={u.id}
                                               user={u} followingInProgress={props.followingInProgress}
                                               unfollow={props.unfollow} follow={props.follow}>
                    </User>)
                }
            </div>
        </div>
        // {
        //     props.users.map(u => <div key={u.id}>
        //         <ul className={s.usersList}>
        //             <li className={s.usersItem}>
        //                 <div className={s.columnLeft}>
        //                     <div>
        //                         <NavLink to={"/profile/" + u.id}>
        //                             <img src={u.photos.small != null ? u.photos.small : userPhoto}
        //                                  className={s.img}/>
        //                         </NavLink>
        //                     </div>
        //                     {u.followed
        //                         ? <button disabled={props.followingInProgress.some(id => id === u.id)}
        //                                   onClick={() => {
        //                                       // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
        //                                       //     withCredentials: true,
        //                                       //     headers: {
        //                                       //         "API-KEY": "a032575c-51f3-45f5-ac29-ac97dd432588"
        //                                       //     }
        //                                       // })
        //                                       // props.toggleFollowingProgress(true, u.id);
        //                                       // usersAPI.unfollow(u.id).then(response => {
        //                                       //     if (response.data.resultCode == 0) {
        //                                       //         props.unfollow(u.id)
        //                                       //     }
        //                                       //     props.toggleFollowingProgress(false, u.id);
        //                                       // });
        //                                       props.unfollow(u.id);
        //                                   }}>Unfollow</button>
        //                         : <button disabled={props.followingInProgress.some(id => id === u.id)}
        //                                   onClick={() => {
        //                                       // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
        //                                       //                                         //     withCredentials: true,
        //                                       //                                         //     headers: {
        //                                       //                                         //         "API-KEY": "a032575c-51f3-45f5-ac29-ac97dd432588"
        //                                       //                                         //     }
        //                                       //                                         // })
        //                                       // props.toggleFollowingProgress(true, u.id);
        //                                       // usersAPI.follow(u.id).then(response => {
        //                                       //     if (response.data.resultCode == 0) {
        //                                       //         props.follow(u.id)
        //                                       //     }
        //                                       //     props.toggleFollowingProgress(false, u.id);
        //                                       // });
        //                                       props.follow(u.id);
        //                                   }}>Follow</button>
        //                     }
        //                 </div>
        //                 <div className={s.columnRight}>
        //                     <div>
        //                         <div className={s.fullName}>
        //                             {u.name}
        //                         </div>
        //                         <div className={s.status}>
        //                             {u.status}
        //                         </div>
        //                     </div>
        //                     <div className={s.location}>
        //                         <div>{'u.location.country'}</div>
        //                         <div>{'u.location.cityName'}</div>
        //                     </div>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>)
        // }
    )
};

export default Users;