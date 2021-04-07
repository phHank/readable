import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import PopularCats from './PopularCats'
import PostsCard from './PostsCard'

const Jumbo = () => {
    return (
        <Jumbotron 
          className='container bg-light d-flex justify-contents-center m-3' 
        >
            <PopularCats />
            <div className='container d-flex flex-column'>
                <PostsCard title={'Most Popular Posts'} />
                <PostsCard title={'Most Recent Posts'} />
            </div>
        </Jumbotron>
    )
}

export default Jumbo