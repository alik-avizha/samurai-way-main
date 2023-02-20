import React, {useRef} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postsElement = props.posts.map((p: any) => <Post message={p.message}
                                                         likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const onAddPost = () => {
        if (newPostElement.current !== null) {
            props.addPost()
        }
    }
    let opPostChange = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updateNewPostText()
        }
    }
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={opPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
};
export default MyPosts;

