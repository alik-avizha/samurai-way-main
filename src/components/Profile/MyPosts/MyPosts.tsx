import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
        return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount={23} />
                <Post message="It's my first post" likesCount={5} />
            </div>
        </div>
    )
}

export default MyPosts;

