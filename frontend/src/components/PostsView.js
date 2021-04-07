import React from 'react'
import { useParams } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import PostAdd from './PostAdd'
import PostsList from './PostsList'
import Footer from './Footer'

const PostsView = () => {
    const { category } = useParams()

    return (
        <div className="d-flex flex-column align-items-center" style={{ maxWidth: '75%'}}>
            <Nav />
            <Header />
            {category && (<PostAdd />)}
            <PostsList />
            <Footer />
        </div>
    )
}

export default PostsView

