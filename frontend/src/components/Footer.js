import React from 'react'

import { 
  AiFillTwitterCircle, 
  AiFillFacebook, 
  AiFillGithub
} from 'react-icons/ai'

const Footer = () => {
    return (
      <footer>
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center'>
              <ul className='list-inline'>
                <li className='list-inline-item text-center'>
                  <a href='https://twitter.com/'>
                    <span className='fa-stack fa-lg'>
                      <AiFillTwitterCircle size={50} />
                    </span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://www.facebook.com/'>
                    <span className='fa-stack fa-lg'>
                      <AiFillFacebook size={50} />
                    </span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://github.com/'>
                    <span className='fa-stack fa-lg'>
                      <AiFillGithub size={50} color='#000' />
                    </span>
                  </a>
                </li>
              </ul>
          </div>
          <hr/>
          <p className='copyright text-muted'>Copyright &copy; Readable {new Date().getFullYear()}</p>
        </div>
      </footer>
    )
}

export default Footer