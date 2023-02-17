import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
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
        ],
        newPostText: 'My new post'
    },
    dialogsPage: {
        messages: [
            {
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'How are you?'
            },
            {
                id: 3,
                message: 'Where are you from?'
            },
            {
                id: 4,
                message: 'Why?'
            },
            {
                id: 5,
                message: 'When do you meet?'
            }
        ],
        dialogs: [
            {
                id: 1,
                name: 'Aleksandr'
            },
            {
                id: 2,
                name: 'Nikita'
            },
            {
                id: 3,
                name: 'Denis'
            },
            {
                id: 4,
                name: 'Kolya'
            },
            {
                id: 5,
                name: 'Dima'
            }
        ]
    }
}

export let addPost = () => {
        let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}



export default state;