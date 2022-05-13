import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            Post {props.number}
            <div className={s.content}>
                <div className={s.image}>
                    <img src="https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-12.jpg"
                         alt="" className={s.img}/>
                </div>
                <div>
                    {props.message}
                </div>
            </div>
            <div className={s.likes}>
                likes:{props.likesCount}
            </div>
        </div>

    )
}

export default Post;