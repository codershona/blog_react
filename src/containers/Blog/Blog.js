import React, { Component } from 'react';
// import axios from 'axios';
// import axiosinstance from '../../axios';
// import axios from '../../axios';
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    
    render () {
      
        return (
            <div className="Blog">
                <header>
                  <nav>
                       <ul>
                          <li><NavLink to="/" exact>Home</NavLink></li>
                           <li><NavLink to={{

                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                           }}>New Post</NavLink></li>
                       </ul>
                  </nav>
                </header>

             {/* <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/" render={() => <h1>Home 2</h1>} /> */}
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />


            </div>
        );
    }
}

export default Blog;