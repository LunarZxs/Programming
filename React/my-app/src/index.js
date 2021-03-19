import React from 'react'
import ReactDom from 'react-dom'

const element = <h1>Hello World</h1> //This part of the virtual dom 
console.log(element);//Part of the virtual dom 

ReactDom.render(element, document.getElementById('root')) //Goes to the index.js and finds the root id (Reaches to the realdom to update the changes )