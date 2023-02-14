import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>
                        Profile
                    </a>
                </div>
                <div>
                    <a>
                        Messages
                    </a>
                </div>
                <div>
                    <a>
                        News
                    </a>
                </div>
                <div>
                    <a>
                        Music
                    </a>
                </div>
                <div>
                    <a>
                        Settings
                    </a>
                </div>

            </nav>
            <div className='content'>
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
                <div>
                    post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default App;
