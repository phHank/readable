import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const NavigationBar = ({searchDisabled}) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <Navbar style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} expand='lg' fixed='top'>
            <Navbar.Brand className='text-light' as={Link} to='/'>Readable</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                <Nav.Link className='text-light' as={Link} to='/categories'>Categories</Nav.Link>
                <Nav.Link className='text-light' as={Link} to='/posts'>Posts</Nav.Link>
                </Nav>
                <Form inline className={searchDisabled && 'd-none'}>
                    <FormControl 
                      value={searchTerm}
                      onChange={({target}) => setSearchTerm(target.value.trim())}
                      type='text' 
                      placeholder="Search" 
                      className='mr-sm-2' 
                    />
                    <button 
                      className='btn btn-dark'
                      onClick={(event) => {event.preventDefault()}}
                    >
                        <Link to={`/search/${searchTerm}`} style={{color: 'white'}}>Search</Link>
                    </button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar