import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import PostsDetailCard from './PostsDetailCard'
import CommentsList from './CommentsList'
import Footer from './Footer'

const CommentPostView = ({posts}) => {
    const {id} = useParams

    const [post] = posts.filter(post => post.id === id)

    return (
        <div className="d-flex flex-column align-items-center" style={{ maxWidth: '75%'}}>
            <Nav />
            <Header />
            <PostsDetailCard post={post} />
            <CommentsList id={id}/> 
            <Footer />
        </div>
    )
}

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(CommentPostView)

