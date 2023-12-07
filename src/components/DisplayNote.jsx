import React from 'react'

const DisplayNote = (props) => {
  return (
    <div className="note">
        <p className="title">{props.title}</p>
        <p className="content">{props.content}</p>
      </div>
  )
}

export default DisplayNote