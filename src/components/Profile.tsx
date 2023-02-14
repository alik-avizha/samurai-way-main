import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg'/>
            </div>
            <div>
                awa+description
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;

