import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img
                    src='https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg' alt=''/>
            </div>
            <div className={classes.descriptionBlock}>
                awa+description
            </div>
          </div>
    )
}

export default ProfileInfo;

