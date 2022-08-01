import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)  
  const [votes, setVotes] = useState((new Array(anecdotes.length)).fill(0))
  
  return (
    <div>
      <AnecdoteWithTitle anecdote={anecdotes[selected]} title="Anectode of the day"/>
      <ShowVotes votes={votes[selected]}/>
      <VoteButton setter={setVotes} values={votes} selected={selected}/>
      <NextButton setter={setSelected} count={anecdotes.length}/>
      <MostVotes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

const AnecdoteWithTitle = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      {props.anecdote}
    </div>
  )
}

const ShowVotes = (props) => {
  return ( 
    <div>has {props.votes} votes</div>
  )
}

const MostVotes = (props) => {
  const maxValue = Math.max(...props.votes)

  const indexOfMaxVotes = () => {  
    return props.votes.indexOf(maxValue)
  }

  return (
    <div>
      <AnecdoteWithTitle anecdote={props.anecdotes[indexOfMaxVotes()]} title={props.title}/>
      <ShowVotes votes={maxValue}/>
    </div>
  )
}

const VoteButton = (props) => {
  
  const vote = () => {
    const votesCopy = [...props.values]
    votesCopy[props.selected] += 1
    props.setter(votesCopy) 
  }

  return (
    <button onClick={vote}>Vote</button>
  )
}

const NextButton = (props) => {
  
  const showNext = () =>{
    let rand = Math.floor(Math.random() * props.count)
    console.log( 'Random:', rand)
    props.setter(rand)
  } 
  return (
    <button onClick={showNext}>
      next anecdote
    </button>
  )
}

export default App