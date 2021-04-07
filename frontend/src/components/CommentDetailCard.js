import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updateCommentScore, updateComment, deleteComment } from '../utils/API'

import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { 
    AiOutlineEdit, 
    AiOutlineSend, 
    AiOutlineCloseCircle, 
    AiOutlineDelete
} from 'react-icons/ai'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

const CommentDetailCard = ({comment}) => {
    const [commentBody, setCommentBody] = useState(comment.body)
    const [commentScore, setCommentScore] = useState(comment.voteScore)
    const [voted, setVoted] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [deleted, setDeleted] = useState(null)
    const [error, setError] = useState(null)

    const handleVote = async (id, vote) => {
        vote === 'upVote' ? setCommentScore(prevScore => ++prevScore) : setCommentScore(prevScore => --prevScore)
        setVoted(true)

        try {
            await updateCommentScore(id, vote)
        } catch (e) {
            console.log('Error trying to update score: ', e)
            setError(`Error updating score: ${e}`)
            vote === 'upVote' ? setCommentScore(prevScore => --prevScore) : setCommentScore(prevScore => ++prevScore)
            setVoted(false)
        }
    }

    const handleUpdate = async (id, body) => {
        setShowEdit(false)

        try {
            await updateComment(id, body)
        } catch (e) {
            console.log('Error trying to update item: ', e)
            setError(`Error updating item: ${e}`)
        }
    }
    
    const handleDelete = async (id) => {
        setDeleted(true)

        try {
            await deleteComment(id)
        } catch (e) {
            console.log('Error trying to delete item: ', e)
            setError(`Error deleting item: ${e}`)
            setDeleted(false)
        }
    }

    return (
    <Card className={`text-center m-1 bg-dark text-light ${deleted === true && 'd-none'}`}>
        {error !== null && 
        (<Alert variant='danger'>
            {error}
        </Alert>)}
        <Card.Body>
            {showEdit === false 
              ? <Card.Text>{commentBody}</Card.Text>
              : <input 
                  onChange={({target}) => setCommentBody(target.value)} 
                  value={commentBody} 
                  minLength={1}
                />
            }
            <p className='m-0 text-muted' style={{fontSize: 12.5}}>
                Score: {commentScore}
            </p>
                {showEdit === false 
                  ? (
                    <div className='btn d-flex justify-content-around'>
                        {voted === false && (<BiUpvote onClick={async () => await handleVote(comment.id, 'upVote')} size='1.5em' color='white' />)}
                        {voted === false && (<BiDownvote onClick={async () => await handleVote(comment.id, 'downVote')} size='1.5em' color='white'/>)}
                        <AiOutlineEdit onClick={() => setShowEdit(true)} size='1.5em' color='white' />
                        <AiOutlineDelete onClick={async () => await handleDelete(comment.id)} size='1.5em' color='white'/>
                   </div>
                    )
                  : (
                    <div className='btn d-flex justify-content-around border'>
                        <AiOutlineSend onClick={async () => await handleUpdate(comment.id, commentBody)} size='1.5em' color='white'/>
                        <AiOutlineCloseCircle onClick={() => setShowEdit(false)} size='1.5em' color='white'/>
                   </div>
                    )  
                }
        </Card.Body>
        <small className="text-muted">
            {`By: ${comment.author} 
            on ${new Date(comment.timestamp).toDateString().slice(4)} 
            at ${new Date(comment.timestamp).toTimeString().slice(0,5)}`}
        </small>
    </Card>
    )
}

export default connect()(CommentDetailCard)