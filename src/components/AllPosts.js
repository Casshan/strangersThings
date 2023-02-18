import React from "react";
import Create from "./Create";
import SearchPosts from "./SearchPosts";

const AllPosts = (props) => {
    const posts = props.posts;
    const IsLoggedIn = props.IsLoggedIn;


    return (
        <div>
            <SearchPosts />
            {IsLoggedIn ? <Create /> : false}
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