import React from 'react'
import  ReactDOM  from 'react-dom/client';  //it allowed to share data on the browser



function Greetings () {
    return <h2>My first component</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greetings></Greetings>)
root.render(<Greetings/>)