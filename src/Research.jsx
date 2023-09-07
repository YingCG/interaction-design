import React from 'react'

function Research({thing}) {
  return (
    <div>
        <h1>{thing.title}</h1>
        <p>{thing.description}</p>
    </div>
  )
}

export default Research