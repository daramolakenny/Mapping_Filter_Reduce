import React from 'react'

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