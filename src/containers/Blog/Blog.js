import React, { Component } from 'react';
// import axios from 'axios';
// import axiosinstance from '../../axios';
// import axios from '../../axios';
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';


class Blog extends Component {
  state = {
    auth: false

  }


    
    render () {
      
        return (
            <div className="Blog">
                <header>
                  <nav>
                       <ul>
                          <li><NavLink 
                          to="/posts/" 
                           exact
                          activeClassName="my-active"
                          activeStyle={{
                            color: '#fa923f',
                            textDecoration: 'underline'
                          }}>Posts</NavLink></li>

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

          

             <Switch>
             
  {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}

             <Route path="/posts" component={Posts} />
             <Redirect from="/" to="/posts" />
              {/*<Route path="/" component={Posts} /> */}
             
             
             
        
          </Switch>

         


            </div>
        );
    }
}

export default Blog;