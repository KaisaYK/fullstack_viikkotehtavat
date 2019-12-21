import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Person from './components/Person.js'
import './index.css'
import { tsPropertySignature } from '@babel/types'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [infoMessage, setInfoMessage] = useState('Add new name and number')

  useEffect(() => {
    console.log('effect')
   personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')



  const addName = (event) => {
      event.preventDefault()
      console.log('button clicked' , event.target)
      const nameObject = {
        name: newName,
        number: newNumber,
      }

     

      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')

      persons.forEach(function(item,index,array){
        if(nameObject.name === item.name)
        return(
          window.alert(`${newName} is already added to phonebook`)
        )
      })
      

        personService
          .create(nameObject)
          .then(returnedPerson =>{
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setInfoMessage(
            `Name ${nameObject.name} was added`
            )
            setTimeout(() => {
                setInfoMessage(null)
            }, 5000)
          })

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const deleteNameObject = id => {  
       window.confirm(`Delete?`)
    
    const url= `http://localhost:3001/persons/${id}`
    axios.delete(url).then(response => {
      setPersons(persons.concat(response))
    })
    setInfoMessage(`Name deleted`)
    setTimeout(() => {
      setInfoMessage(null)
    }, 5000)
  }

  const rows = () => persons.map(person =>
      <Person 
        key={person.name}
        person={person}
       deleteNameObject = {() => deleteNameObject(person.id)}
      />     
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message= {infoMessage} />
      <PersonForm addName = {addName} newName= {newName} handleNameChange={handleNameChange} handleNumberChange= {handleNumberChange} />
      <h2>Numbers</h2>
       <Persons list = {rows()}/>       
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

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="message">
      {message}
    </div>
  )
}


export default App