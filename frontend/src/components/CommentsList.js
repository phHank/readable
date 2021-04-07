import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getComments } from '../utils/API'

import CommentDetailCard from './CommentDetailCard'
import CommentAdd from './CommentAdd'

const CommentsList = () => {
    const {id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        const retrieveComments = async () => {
            setComments( await getComments(id))
        }

        retrieveComments()
    })

    return (
        <div className='d-flex flex-column justify-content-center m-3 mt-0'>
            <CommentAdd parentId={id} /> 
            <h4 className='align-self-center'>
                {comments.length === 0 ?  'No Comments Yet!' : 'Comments'}
            </h4>
            <div className='row'>
                {comments.sort((a,b) => b.voteScore - a.voteScore)
                .map(comment => <CommentDetailCard key={comment.id} comment={comment} /> )}
            </div>
        </div>
    )
}

export default CommentsList