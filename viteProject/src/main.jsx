import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Vikas</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://instagram.com" target='_blank'>Visit instagram</a>
)



const anotherUser = "learning react"

//This is how we create an element in react.
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherElement//This is a evaluted expression or variable
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement//basically react renders an object or function so when we can write functions as functionName() it will work in same way or <functionName/> this is generally used.
  // Object can be directly rendered if written by their name. In this case we have created the element to be rendered on our own so it is in form of a object.

)
