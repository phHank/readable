export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export const getInitialData = data => {
    return {
        type: GET_INITIAL_DATA,
        data,
    }
}

export const CREATING_POST = 'CREATING_POST'

export const creatingPost = (post) => {
    return {
        type: CREATING_POST,
        post
    }
}



export const UPDATING_SCORE = 'UPDATING_SCORE'

export const updatingScore = (id, vote) => {
    return {
        type: UPDATING_SCORE,
        id,
        vote
    }
}


export const UPDATING_POST = 'UPDATING_POST'

export const updatingPost = (id, title, body) => {
    return {
        type: UPDATING_POST,
        id,
        title,
        body
    }
}

export const DELETING_POST = 'DELETING_POST'

export const deletingPost = id => {
    return {
        type: DELETING_POST,
        id
    }
}