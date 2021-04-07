import React, { useEffect, useState } from 'react'

import { get404Img } from '../static'

import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import NavigationBar from './Nav'
import Footer from './Footer'

const NotFound = () => {
    const [headerImg, setHeaderImg] = useState({})

    useEffect(() => {
        setHeaderImg(get404Img())
    }, [])

    return (
        <div className='container w-75'>
            <NavigationBar />
            <Card className="text-dark">
                <Card.Img 
                    src={headerImg.src}
                    alt={headerImg.alt}
                />
                <Card.ImgOverlay>
                    <div className='text-light' style={{height: '20%'}}></div>
                    <h2 className='text-light'>
                        <Badge variant="light">Houston</Badge> we have a problem
                    </h2>
                    <div className="d-flex flex-row text-light">
                        <Card.Text>
                            <Badge variant="light">404:</Badge> Resource Not Found
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <div className='d-flex justify-content-center'>
                <Footer />
            </div>
        </div>

    )
}

export default NotFound