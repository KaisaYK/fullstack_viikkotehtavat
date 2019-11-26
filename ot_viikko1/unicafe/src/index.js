import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { conditionalExpression } from '@babel/types'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
     setAll(allClicks.concat('G'))
     setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
}

const handleBadClick = () => {
    setAll(allClicks.concat('B'))
     setBad(bad + 1)
}

  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />    
      <Button onClick={handleBadClick} text='bad' />     
      </div>
      <h1>statistics</h1>
      <History allClicks={allClicks.length} good={good} neutral= {neutral} bad = {bad} />
    </div>
  )
}

const History = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Statistics good={props.good} neutral= {props.neutral} bad= {props.bad} total={props.allClicks} />
    </div>
  )
}


const Statistics = (props) => {
  return(
  <div>
      <Statistic text="good" value ={props.good} />
      <Statistic text="neutral" value ={props.neutral} />
      <Statistic text="bad" value ={props.bad} />
      <Total clicksGood = {props.good} clicksNeutral = {props.neutral} clicksBad = {props.bad} />
      <Average clicksGood = {props.good} clicksBad = {props.bad} total = {props.total} />
      <Positive clicksGood = {props.good} total = {props.total}/>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
        <p>{props.text} {props.value}</p>
    </div>
)
}

const Total = (props) => {
    return(
      <div>
          <p>all {props.clicksGood + props.clicksNeutral + props.clicksBad}</p>
      </div>
      )
  }

const Average = (props) => {
    return (
        <div>
            <p>average {(props.clicksGood - props.clicksBad) / props.total }</p>
        </div>
    )
}

const Positive = (props) => {
    return(
        <div>
            <p>positive {props.clicksGood / props.total * 100} %</p>
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)