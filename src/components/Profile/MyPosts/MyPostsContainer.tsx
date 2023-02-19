import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostContainer = (props: any) => {
    debugger
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let opPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (<MyPosts updateNewPostText={opPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText = {state.profilePage.newPostText}
            />)
};
export default MyPostContainer;

