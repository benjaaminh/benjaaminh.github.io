import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HashRouter as Router} from 'react-router-dom'
//use hashrouter to fix refresh problem in github pages
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
