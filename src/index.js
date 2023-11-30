import React from 'react'
import  ReactDOM  from 'react-dom/client';  //it allowed to share data on the browser



function Greetings () {
    return (
        <section>
    <h2>My first component</h2>
    <h1>My component</h1>
    <h6>My firs</h6>
    </section>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greetings></Greetings>)
root.render(<Greetings/>)