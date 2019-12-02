import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const total = course.parts.reduce( (s, p) => {
    console.log('what is happening', s, p)
    return s + p.exercises 
  }, 0)

  return (
    <div>
      <Course course={course} total = {total} />
    </div>
  )
}

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


ReactDOM.render(<App />, document.getElementById('root'))
