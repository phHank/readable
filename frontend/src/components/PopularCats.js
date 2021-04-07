import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


const PopularCats = ({posts}) => {

    const getPopularCategories = () => {
        const counter = {}
    
        posts.forEach(post => counter[post.category] === undefined 
            ? counter[post.category] = 1 
            : counter[post.category] + 1
        )

        const sortedCategories = Object.entries(counter).sort((a, b) => a[1] - b[1])

        return sortedCategories.slice(0, 10)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header className='bg-dark text-white font-weight-bold'>Popular Categories</Card.Header>
            <ListGroup variant='flush'>
                {getPopularCategories().map(category => (
                    <ListGroup.Item key={category[0]}>
                        <Link to={`/${category[0]}/posts`}>
                            &#9642; {category[0]}
                        </Link>    
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    )
}

const mapStateToProps = ({posts}) => ({ posts })

export default connect(mapStateToProps)(PopularCats)