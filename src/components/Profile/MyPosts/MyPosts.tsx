import React, {useRef} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props: any) => {

    let postsElement = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message}
                                                                                              likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }


    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
};
export default MyPosts;

