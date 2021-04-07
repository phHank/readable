import "regenerator-runtime/runtime.js"
import { v4 as uuidv4 } from 'uuid'

const fetch = require('node-fetch')

const url = 'http://localhost:3001/'
const headers = { 
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json' 
}

////////////////////// Categories /////////////////////////

export const getCategories  = async () => {
    const categories = await fetch(url + 'categories', { 
        headers
    })

    return categories.json()
}

////////////////////// Posts /////////////////////////

export const getPosts = async () => {
    const posts = await fetch(url + 'posts', { 
        headers
    })

    return posts.json()
}

export const createPost = async (title, body, author, category) => {
    const newPost = {
        id: uuidv4(),
        timestamp: Date.now(),
        title, 
        body, 
        author, 
        category
    }
    
    await fetch(url + `posts`, {
        method: 'POST',
        headers,
        body: JSON.stringify(newPost)
    })

    return newPost
}

export const updateScore = async (id, option) => {
    await fetch(url + `posts/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({option})
    })

    return option
}

export const updatePost = async (id, title, bodyText) => {
    await fetch(url + `posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({title, body: bodyText})
    })

    return id
} 

export const deletePost = async (id) => {
    await fetch (url + `posts/${id}`, {
        method: 'DELETE',
        headers
    })

    return id
}

////////////////////// Comments /////////////////////////

export const getComments = async (postId) => {
    const comments = await fetch (url + `posts/${postId}/comments`, {
        headers
    })

    return comments.json()
}

export const createComment = async (body, author, parentId) => {
    const newComment = {
        id: uuidv4(),
        timestamp: Date.now(),
        body, 
        author, 
        parentId
    }
    
    await fetch(url + `comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify(newComment)
    })

    return newComment
}

export const updateCommentScore = async (id, option) => {
    await fetch(url + `comments/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({option})
    })
}

export const updateComment = async (id, bodyText) => {
    await fetch(url + `comments/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            timestamp: Date.now(), 
            body: bodyText
        })
    })

    return id
}

export const deleteComment = async (id) => {
    await fetch (url + `comments/${id}`, {
        method: 'DELETE',
        headers
    })

    return id
}
