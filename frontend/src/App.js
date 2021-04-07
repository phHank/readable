import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { getCategories, getPosts } from './utils/API'
import { getInitialData } from './actions'

import Spinner from 'react-bootstrap/Spinner'
import Home from './components/Home'
import CategoriesList from './components/CategoriesList'
import PostsView from './components/PostsView'
import CommentPostView from './components/CommentPostView'
import Search from './components/Search'
import NotFound from './components/NotFound'

const App = ({dispatch}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const cats = await getCategories()
            const posts = await getPosts()
            
            dispatch(getInitialData({
                categories: cats.categories, 
                posts
            }))

            setLoading(false)
        }

        getData()
    }, [])

    return (
        <div className="d-flex flex-column align-items-center" >
            {loading === true 
              ? (<Spinner animation="grow" variant="info" />)
              : 
              (
              <Router>
                <Switch>
                    <Route exact path="/categories" children={<CategoriesList />} />
                    <Route exact path="/posts" children={<PostsView />} />
                    <Route exact path="/:category/posts" children={<PostsView />} />
                    <Route exact path="/posts/:id" children={<CommentPostView /> } />
                    <Route path="/search/:query" children={<Search />} />
                    <Route path="/search" children={<Search />} />
                    <Route exact path="/" children={<Home />} />
                    <Route children={<NotFound />} />
                </Switch>
              </Router>  
              )
            }
        </div>
    )
}

export default connect()(App)