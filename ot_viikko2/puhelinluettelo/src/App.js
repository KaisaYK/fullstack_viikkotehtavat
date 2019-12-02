import React, { useState } from 'react'
import { tsPropertySignature } from '@babel/types'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')



  const addName = (event) => {
      event.preventDefault()
      console.log('button clicked' , event.target)
      const nameObject = {
        name: newName,
        number: newNumber
      }

      persons.forEach(function(item,index,array){
        if(nameObject.name === item.name)
        return(
          window.alert(`${newName} is already added to phonebook`)
        )
      })

        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
        
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const rows = () => persons.map(person =>
      <li key={person.name}>{person.name} {person.number}</li>
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addName = {addName} newName= {newName} handleNameChange={handleNameChange} handleNumberChange= {handleNumberChange} />
      <h2>Numbers</h2>
       <Persons list =  {rows()}/>       
    </div>
  )

}

const PersonForm = (props) => {
    return(
      <div>
        <form onSubmit={props.addName}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input value = {props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
    )
}

const Persons = (props) => {
  return(
    <div>
      {props.list}
    </div>
  )
}

export default App