import React from 'react';
import classes from './users.module.css'


let Users = (props: any) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    fullName: 'Aleksandr',
                    followed: false,
                    photoUrl: 'https://feo.travel/wp-content/uploads/2018/04/Aleksandr-3-768x539.jpg',
                    status: 'I am programmer',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 2,
                    fullName: 'Denis',
                    followed: true,
                    photoUrl: 'https://feo.travel/wp-content/uploads/2018/04/Aleksandr-3-768x539.jpg',
                    status: 'I am programmer too',
                    location: {
                        city: 'Omsk',
                        country: 'Russia'
                    }
                },
                {
                    id: 3,
                    fullName: 'Nikita',
                    followed: false,
                    photoUrl: 'https://feo.travel/wp-content/uploads/2018/04/Aleksandr-3-768x539.jpg',
                    status: 'I am programmer too',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                </div>)
            }
        </div>
    )

}
export default Users;