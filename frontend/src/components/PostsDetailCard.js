import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import { updateScore, updatePost, deletePost } from '../utils/API'
import { updatingScore, updatingPost, deletingPost } from '../actions'

import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { 
    AiOutlineEdit, 
    AiOutlineSend, 
    AiOutlineCloseCircle, 
    AiOutlineDelete
} from 'react-icons/ai'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

const PostsDetailCard = ({posts, post, dispatch}) => {
    const {id} = useParams()
    const [filteredPost] =  id ? posts.filter(post => post.id === id) : post

    if (id && filteredPost === undefined) {
        return <Redirect to='/item-not-found' />
    }

    const [postTitle, setPostTitle] = useState(filteredPost.title)
    const [postBody, setPostBody] = useState(filteredPost.body)
    const [postScore, setPostScore] = useState(filteredPost.voteScore)
    const [voted, setVoted] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [deleted, setDeleted] = useState(null)
    const [error, setError] = useState(null)

    const handleVote = async (id, vote) => {
        vote === 'upVote' ? setPostScore(prevScore => ++prevScore) : setPostScore(prevScore => --prevScore)
        setVoted(true)

        try {
            await updateScore(id, vote)
            dispatch(updatingScore(id, vote))
        } catch (e) {
            console.log('Error trying to update score: ', e)
            setError(`Error updating score: ${e}`)
            vote === 'upVote' ? setPostScore(prevScore => --prevScore) : setPostScore(prevScore => ++prevScore)
            setVoted(false)
        }
    }

    const handleUpdate = async (id, title, body) => {
        setShowEdit(false)

        try {
            await updatePost(id, title, body)
            dispatch(updatingPost(id, title, body))
        } catch (e) {
            console.log('Error trying to update item: ', e)
            setError(`Error updating item: ${e}`)
        }
    }
    
    const handleDelete = async (id) => {
        setDeleted(true)

        try {
            await deletePost(id)
            dispatch(deletingPost(id))
        } catch (e) {
            console.log('Error trying to delete item: ', e)
            setError(`Error deleting item: ${e}`)
            setDeleted(false)
        }
    }

    if (id && deleted) {
        return <Redirect to={`/${filteredPost.category}/posts`} />
    }

    return (
    <Card className={`text-center m-1 mb-0 ${deleted === true && 'd-none'}`}>
        {error !== null && 
        (<Alert variant='danger'>
            {error}
        </Alert>)}
        <Card.Header>
            {showEdit === false 
              ? <Card.Title>{postTitle}</Card.Title>
              : <input 
                  onChange={({target}) => setPostTitle(target.value)} 
                  value={postTitle} 
                  minLength={1}
                />
            }
        </Card.Header>
        <Card.Body>
            {showEdit === false 
              ? <Card.Text>{postBody}</Card.Text>
              : <input 
                  onChange={({target}) => setPostBody(target.value)} 
                  value={postBody} 
                  minLength={1}
                />
            }
            <p className='m-0 text-muted' style={{fontSize: 12.5}}>
                Score: {postScore} |
                Comment Count: {filteredPost.commentCount} 
            </p>
                {showEdit === false 
                  ? (
                    <div className='btn d-flex justify-content-around border'>
                        {voted === false && (<BiUpvote onClick={async () => await handleVote(filteredPost.id, 'upVote')} color='green' size='2em' />)}
                        {voted === false && (<BiDownvote onClick={async () => await handleVote(filteredPost.id, 'downVote')} color='red' size='2em'/>)}
                        <AiOutlineEdit onClick={() => setShowEdit(true)} size='2em' />
                        <AiOutlineDelete onClick={async () => await handleDelete(filteredPost.id)} size='2em'/>
                   </div>
                    )
                  : (
                    <div className='btn d-flex justify-content-around border'>
                        <AiOutlineSend onClick={async () => await handleUpdate(filteredPost.id, postTitle, postBody)} size='2em' />
                        <AiOutlineCloseCircle onClick={() => setShowEdit(false)} size='2em' />
                   </div>
                    )  
                }
        </Card.Body>
        <Card.Footer className="text-muted">
            {`By: ${filteredPost.author} 
            on ${new Date(filteredPost.timestamp).toDateString().slice(4)} 
            at ${new Date(filteredPost.timestamp).toTimeString().slice(0,5)}`}
        </Card.Footer>
    </Card>
    )
}

const mapStateToProps = ({posts}, {post}) => ({
    posts, 
    post: [post]
})

export default connect(mapStateToProps)(PostsDetailCard)