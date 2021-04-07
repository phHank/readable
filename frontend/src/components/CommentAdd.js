import React, {useState} from 'react'

import { createComment } from '../utils/API'

const CommentAdd = ({parentId}) => {
    const [comment, setComment] = useState('')
    const [author, setAuthor] = useState('thingone')
    const [submitted, setSubmitted] = useState(false)

    const handleCommentSubmit = async (body, author, parentId) => {
        try {
            await createComment(body, author, parentId)
            
            setComment('')
            setAuthor('')
            setSubmitted(true)
        } catch (e) {
            console.log('Error adding new comment: ', e)
            setSubmitted(false)
        }
    }

    return (
        <form className={`align-self-center ${submitted && ('d-none')}`}>
            <input 
                onChange={({target}) => setComment(target.value)}
                value={comment}
                placeholder='New Comment'
            />
            <input 
                onChange={({target}) => setAuthor(target.value)}
                value={author}
                placeholder='Comment Author'
                className='m-1 mt-0'
            />
            <button
            onClick={async event => {
                event.preventDefault() 
                await handleCommentSubmit(comment, author, parentId)
            }}
            className='btn btn-dark'
            disabled={comment === '' || author === ''}
            >
                Submit
            </button>
        </form>
    )
}

export default CommentAdd