import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 23
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 5
        },
    ]
    let postsElement = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;

