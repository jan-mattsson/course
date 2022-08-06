import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phoneNumber: '010 123456',
      key: 'Arto Hellas' }
  ]) 

  const [filter, setFilter] = useState('')

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
