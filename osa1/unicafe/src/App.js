import { useState } from 'react'

const Button = (props) => {
  return (
      <button onClick={props.setter}>
         {props.text}
      </button>
  )
}

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' setter={ () => props.incrementGood() }/>
      <Button text='neutral' setter={ () => props.incrementNeutral() } />
      <Button text='bad' setter={ () => props.incrementBad() }/>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.total > 0) return (
    <div>
      <h1>statistics</h1>
      <table>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.total}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
      </table>
    </div>    
  )

  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  
  const calculateTotal = () => good+neutral+bad
  const calculateAverage = () => (good * 1 + neutral*0 + bad * -1) / calculateTotal()
  const calculatePositive = () => good / calculateTotal() * 100.0 + " %"
  return (
    <div>
      <Feedback incrementGood={incrementGood} 
                incrementNeutral={incrementNeutral}
                incrementBad={incrementBad} />

      <Statistics good={good} 
                  neutral={neutral} 
                  bad={bad}
                  total={calculateTotal()}
                  average={calculateAverage()}
                  positive={calculatePositive()}/>
    </div>
  )
}

export default App