import { 
    GET_INITIAL_DATA, 
    CREATING_POST,
    UPDATING_POST, 
    DELETING_POST, 
    UPDATING_SCORE 
} from '../actions'

const readableData = (state = {}, action) => {
    switch(action.type) {
        case GET_INITIAL_DATA : 
            return {
                ...state, 
                ...action.data
            }
        case CREATING_POST : 
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case UPDATING_POST :
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.id) {
                        post.title = action.title
                        post.body = action.body
                        return post
                    } else {
                        return post
                    }
                } )
            }
        case DELETING_POST : 
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        case UPDATING_SCORE :
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.id) {
                        post.voteScore = action.vote === 'upVote' ? ++post.voteScore : --post.voteScore
                        return post
                    } else {
                        return post
                    }
                } )
            }
        default :
        return state
    } 
}

export default readableData