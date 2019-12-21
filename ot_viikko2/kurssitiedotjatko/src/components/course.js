import React from 'react'

const Course = (props) => {
    return(
      <div>
        <Header name = {props.course.name} />
        <Content parts = {props.course.parts}/>
        <Total amount = {props.total}/>
      </div>
    )
  }
  
    const Header = (props) => {
      return( 
      <div>
          <h1>{props.name}</h1>
      </div>
      )
    }
  
    const Content = (props) => {
      return (
          <div>
            <ul>
              {props.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
            </ul>    
          </div>
        )
    }
  
    const Part = (props) => {
        return (
            <div>
                <p>{props.part} {props.exercises}</p>
            </div>
        )
  
    }
  
    const Total = (props) => {
      return(
        <div>
            <p>Number of exercises {props.amount} </p>
        </div>
        )
    }

export default Course