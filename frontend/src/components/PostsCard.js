import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

const PostsCard = ({posts, title}) => {

    const sortPosts = () => {
        return title === 'Most Popular Posts'
          ? posts.sort((a, b) => b.voteScore - a.voteScore).slice(0, 3)
          : posts.sort((a, b) => b.timestamp - a.timestamp).slice(0, 3)
    } 

    return (
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header className='bg-dark text-light'>
          {title}
        </Card.Header>
        <Card.Body>

          {sortPosts().map(post => {
          return (
              <div key={post.id} className='border-bottom border-secondary mb-2'>
                <Link to={`/posts/${post.id}`}>
                  <h6>{post.title}</h6>
                </Link>
                <p className='text-muted'>Category: {post.category}</p>
                <small className='text-muted'>
                    {`By: ${post.author} 
                    on ${new Date(post.timestamp).toDateString()} 
                    at ${new Date(post.timestamp).toTimeString().slice(0,5)}`}
                </small>
              </div>
            )
          }
          )}

        </Card.Body>
      </Card>
    )
}

const mapStateToProps = ({posts}, {title}) => ({ 
    posts, 
    title
})

export default connect(mapStateToProps)(PostsCard)