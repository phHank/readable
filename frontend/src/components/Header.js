import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { generateRandomImg } from '../static'

import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

const Header = () => {
    const { pathname } = useLocation()

    const [headerImg, setHeaderImg] = useState({})

    useEffect(() => {
        setHeaderImg(generateRandomImg())
    }, [])

    return (
        <Card className='text-dark' style={{position: 'relative', overflow: 'hidden', height: '300px'}}>
            <img 
                src={headerImg.src}
                alt={headerImg.alt}
                style={{width: '100%'}}
                
            />
            <Card.ImgOverlay>
                <div style={{height: '33%'}}></div>
                <h2>
                    <Badge variant="dark">Readable</Badge> {pathname.split('/')[1]}
                </h2>
                <div className="d-flex flex-row">
                    <Card.Text>
                        Topics that matter to <Badge variant="dark">You</Badge>
                    </Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Header