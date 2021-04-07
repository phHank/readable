import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'


const CategoriesList = ({categories, posts}) => {

    const getLastUpdate = (cat) => {
       const [filterPosts] = posts.filter(post => post.category === cat.name )

       return filterPosts
    }

    return (
        <div className="d-flex flex-column align-items-center" style={{ maxWidth: '75%'}}>
            <Nav />
            <Header />
            <Jumbotron className='d-flex flex-column m-3'>
                <h2 className='align-self-center'>Categories</h2>
                {categories.sort((a, b) => a.name.localeCompare(b.name))
                .map(category => {
                    let title = 'No posts yet, click here to be the first!'
                    let timestamp = null

                    if (getLastUpdate(category) !== undefined) {
                        title = getLastUpdate(category).title
                        timestamp = getLastUpdate(category).timestamp
                    }

                    return (
                    <Link key={category.name} to={`/${category.name}/posts`}>
                        <Card>
                            <Card.Title>{category.name}:</Card.Title>
                            <p>Latest Post: {title}</p>
                            {timestamp !== null && (
                            <small className='text-muted'>
                                Last Updated: {new Date(timestamp).toDateString().slice(4)} 
                            </small>
                            )}
                        </Card>
                    </Link>
                    )
                })}
            </Jumbotron>
            <Footer />
        </div>
    )
}

const mapStateToProps = ({categories, posts}) => ({
    categories, posts
})

export default connect(mapStateToProps)(CategoriesList)

