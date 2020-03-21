import React, { Component } from 'react';
// import axios from 'axios';
// import axiosinstance from '../../axios';
// import axios from '../../axios';
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';


class Blog extends Component {
    
    render () {
      
        return (
            <div className="Blog">
                <header>
                  <nav>
                       <ul>
                          <li><a href="/">Home</a></li>
                           <li><a href="/new-post">New Post</a></li>
                       </ul>
                  </nav>
                </header>

               <Route path="/" exact render={() => <h1>Home</h1>} />

            </div>
        );
    }
}

export default Blog;