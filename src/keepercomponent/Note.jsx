import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Note({title, content}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Note;