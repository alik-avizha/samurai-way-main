import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bxCh54WgCUuDt2QoGduhWe_bxLObQ1GW8w&usqp=CAU'/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post;

