import React from 'react'
import { useParams } from 'react-router-dom'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PostForm from './PostForm'

const PostAdd = () => {
    const {category} = useParams()

    return (
        <Accordion className='mt-3'>
            <Card>
                <Card.Header className='align-self-center border'>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h3 className='text-secondary'>{`Create a New Post in Readable's ${category}`}</h3>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <PostForm category={category}/>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default PostAdd