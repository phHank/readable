import React from 'react'
import { connect } from 'react-redux'

import NavigationBar from './Nav'
import Header from './Header'
import Jumbo from './Jumbotron'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center" style={{ maxWidth: '75%'}}>  
            <NavigationBar />
            <Header />
            <Jumbo />
            <Footer />
        </div>
    )
}

const mapStateToProps = ({categories, posts}) => ({
    categories, 
    posts
})

export default connect(mapStateToProps)(Home)