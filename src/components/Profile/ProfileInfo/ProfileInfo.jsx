import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    // if (props.profile == null || props.profile == undefined)
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div className="person__content">
                <div className={s.person__img}>
                    <img src={props.profile.photos.large} alt="" className="person__pic"/>
                </div>
                <div className="person__desc">
                    <div className="person__name">Vitalii Tkachenko</div>

                    <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>

                    {/*<div className="person__date">Date of Birth: 30.09.1996</div>*/}
                    {/*<div className="person__city">City: Lviv</div>*/}
                    {/*<div className="perscon__education">Educatin: LNMA `20</div>*/}
                    {/*<div className="person__site">Web site:</div>*/}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;