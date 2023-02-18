import React from 'react';

const SearchPosts = () => {
    return (
        <div className='container'>
            <div className="newPost">
                <form className="input-group flex-nowrap">
                    <input type='text' className="form-control" placeholder='Search...'></input>
                </form>
            </div>
        </div>
    )
}

export default SearchPosts;