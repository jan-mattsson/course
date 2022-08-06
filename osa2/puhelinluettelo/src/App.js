import axios from 'axios'
import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons( response.data )
      })

  }, [])

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter setFilter={setFilter}/>

      <h2>Add new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )

}


export default App
