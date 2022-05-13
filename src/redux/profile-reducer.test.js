import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', number: 1, likesCount: 12},
        {id: 2, message: 'It\'s test for props.', number: 2, likesCount: 9},
        {id: 3, message: 'New post', number: 3, likesCount: 11},
        {id: 4, message: 'Practicing react', number: 4, likesCount: 5},
        {id: 5, message: 'Прокинул пропсы', number: 5, likesCount: 2}
    ]
};

it('length of posts should be incremented', () => {
    //1. test data-
    let action = addPostActionCreator('add new post');
    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(6);
});

it('message of new posts should be correct', () => {
    //1. test data-
    let action = addPostActionCreator('add new post');
    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[5].message).toBe('add new post');
});

it('after deleting length of message should decrement', () => {
    //1. test data-
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});




