import React, {useRef} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props: any) => {

    let postsElement = props.posts.map((p: any) => <Post message={p.message}
                                                         likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            /*props.addPost()*/
            props.dispatch({type: 'ADD-POST'})
        }
    }
    let opPostChange = () => {
        if (newPostElement.current !== null) {
            /*props.updateNewPostText(newPostElement.current.value)*/
            let action = {type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value}
            props.dispatch(action)
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
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
};
export default MyPosts;

