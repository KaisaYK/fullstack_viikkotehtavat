  
import React from 'react'

const Person = ({ person, deleteNameObject }) => {

  return (
    <li>
      {person.name} {person.number}
      <button onClick={deleteNameObject}>delete</button>
    </li>
  )
}

export default Person