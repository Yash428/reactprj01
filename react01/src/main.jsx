import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const another = "chai aur node"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  another
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
