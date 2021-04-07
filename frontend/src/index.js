import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from  './middleware'
import { Provider } from 'react-redux'

import App from './App'
 
ReactDOM.render(
    <Provider store={createStore(reducer, middleware)}>
        <App />
    </Provider>,
    document.getElementById('root')
)