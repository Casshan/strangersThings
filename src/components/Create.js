import React from 'react';

const Create = () => {
    return (
        <div className='container'>
            <div className="newPost">
                <form className="input-group flex-nowrap">
                    <input type='text' className="form-control" placeholder='Post Title'></input>
                    <input type='text' className="form-control" placeholder='Post Content'></input>
                    <button className="btn btn-outline-primary" type='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;