
import React from 'react'
import Course from './components/course'

const App = ({ courses }) => {

const total = courses[0].parts.reduce( (s, p) => {
  console.log('what is happening', s, p)
  return s + p.exercises 
}, 0)


const total2 = courses[1].parts.reduce( (s, p) => {
  console.log('what is happening', s, p)
  return s + p.exercises 
}, 0)

return (
  <div>
    <Course course={courses[0]} total = {total} />
    <Course course={courses[1]} total = {total2} />
  </div>
)

}
export default App