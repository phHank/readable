import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import NavigationBar from './Nav'

const Search = ({posts, categories}) => {
    const { query } = useParams()
    const [resultPosts, setResultPosts ] = useState([])
    const [resultCats, setResultCats] = useState([])

    useEffect(() => {
        setResultPosts(posts.filter(post => 
            JSON.stringify(Object.values(post)).includes(query)
        ))

        setResultCats(categories.filter(category => 
            JSON.stringify(Object.values(category)).includes(query)
        ))
    }, [])

    return (
        <div>
            <NavigationBar searchDisabled={true} />
            <div style={{height: 100}}></div>
            <h6>Matches for "{query}"</h6>
            <div>
                <h3>Categories:</h3>
                {!resultCats.length 
                  ? (<p>No matching categories found.</p>) 
                  : resultCats.map(category =>  
                      (<Link key={category.name} className='m-3' to={`/${category.name}/posts`}>
                            &#9642; {category.name}
                        </Link>)
                    )
                }
            </div>
            <div>
                <h3>Posts:</h3>
                {!resultPosts.length 
                  ? (<p>No matching posts found.</p>) 
                  : resultPosts.map(post =>  
                      (<Link key={post.id} className='m-1 d-block' to={`/posts/${post.id}`}>
                            &#9642; {post.title}
                        </Link>)
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({posts, categories}) => ({posts, categories})

export default connect(mapStateToProps)(Search)