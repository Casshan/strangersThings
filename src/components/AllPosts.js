import React, { useState } from "react";
import SearchPosts from "./SearchPosts";
import { Link } from 'react-router-dom';

const AllPosts = (props) => {
    const [ searchPosts, setSearchPosts ] = useState('');

    let posts = props.posts;
    const IsLoggedIn = props.IsLoggedIn;

    const filterPosts = () => {
        if (!searchPosts) {
            return posts;
        } else {
            return posts.filter((post) => {
                console.log(post.title);
                return post.title.toLowerCase().includes(searchPosts.toLowerCase());
            })
        }
    }

    posts = filterPosts();

    return (
        <div>
            <div id='posts-header' className='container'>
                <SearchPosts setSearchPosts={setSearchPosts}/>
                {IsLoggedIn ? <div>
            <Link to='/create'><button id='new-post-button' className="btn btn-outline-primary" type='button'>Create Post</button></Link>
            </div> : null}
            </div>

            <div className='container'>
                <h1 id='post-title'>Posts</h1>
                {
                    posts.map((post, _id) => {
                        return (
                            <div id='post-container' className='card' key={_id}>
                                <div className='card-header'>{post.title}</div>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Author: {post.author.username}</li>
                                    <li className='list-group-item'>Price: {post.price}</li>
                                    <li id='post-description' className='list-group-item'>Description: {post.description}</li>
                                    <li className='list-group-item'>Location: {post.location}</li>
                                    <li className='list-group-item'>
                                        {post.willDeliver ? 'Will Deliver: Yes' : 'Will Deliver: No'}
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllPosts;