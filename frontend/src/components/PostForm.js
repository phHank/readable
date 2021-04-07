import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createPost } from '../utils/API'
import { creatingPost } from '../actions'

const PostForm = ({category, dispatch}) => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [postAuthor, setPostAuthor] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            let newPost = await  createPost(postTitle, postBody, postAuthor, category)

            newPost.voteScore = 1
            newPost.commentCount = 0

            dispatch(creatingPost(newPost))

            setPostTitle('')
            setPostBody('')
            setPostAuthor('')
        } catch (e) {
            console.log('Error submitting new post: ', e)
         }
    }

    return (
        <form className='d-flex flex-column'>
            <input 
              className='m-1'
              onChange={({target}) => setPostTitle(target.value)}
              placeholder='Post Title' 
              value={postTitle} 
            />
            <textarea 
              className='m-1'
              onChange={({target}) => setPostBody(target.value)}
              placeholder='Post Body' 
              value={postBody}  
            />
            <input 
              className='m-1'
              onChange={({target}) => setPostAuthor(target.value)}
              placeholder='Post Author' 
              value={postAuthor} 
            />
            <button 
              onClick={async (event) => await handleSubmit(event)}
              className='btn btn-dark'
              disabled={postTitle === '' || postBody === '' || postAuthor === ''}
            >
                Submit
            </button> 
        </form>
    )
}

export default connect()(PostForm)