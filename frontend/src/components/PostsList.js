import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import Alert from 'react-bootstrap/Alert'
import PostsDetailCard from './PostsDetailCard'

const PostsList = ({posts}) => {
    const {category, id} = useParams()
    const filteredPosts = category ? posts.filter(post => post.category === category) : posts

    return (
        <div className='m-3'>
            {filteredPosts.length === 0 
              ? <Alert variant='info'>
                  {`No posts in Readable's ${category} yet! Be the first!`}
                </Alert>
              : filteredPosts.sort((a, b) => b.timestamp - a.timestamp)
              .map(post => 
                <div key={post.id}>
                <PostsDetailCard post={post} />
                {!id && (
                <Link 
                  to={`/posts/${post.id}`}
                  className='btn btn-dark m-0'
                  style={{width: '100%'}}>
                  <span className='font-weight-bold'>OPEN</span> {post.title}
                </Link> 
                )}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = ({posts}) => ({ 
    posts
})

export default connect(mapStateToProps)(PostsList)