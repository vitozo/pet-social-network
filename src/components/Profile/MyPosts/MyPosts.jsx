import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} number={p.number} likesCount={p.likesCount} key={p.id}/>);

    // let newPostElement = React.createRef();

    // let onAddPost = () => {
    //     props.addPost();
    // };

    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // };

    const onAddPost = (values) =>{
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.content}>
            <div className={s.title}>
                My posts
            </div>
            {/*<div className={s.add} >*/}
            {/*    <textarea className={s.textarea} ref={newPostElement} onChange={onPostChange} value={props.newPostText}*/}
            {/*           placeholder={'create new post'}/>*/}
            {/*    <button className={s.btn} onClick={onAddPost}> Add post</button>*/}
            {/*</div>*/}
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <div>
            <form className={s.add} onSubmit={props.handleSubmit}>
                <Field className={s.textarea} component={Textarea} name="newPostText" placeholder="create new post"
                       validate={[required, maxLength10]}/>
                <button className={s.btn}> Add post</button>
            </form>
        </div>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)


export default React.memo(MyPosts);