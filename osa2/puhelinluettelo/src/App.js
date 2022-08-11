import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PersonPersistence from './components/PersonPersistence'
import Notification from './components/Notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    PersonPersistence.GetAllPersons()
      .then(response => setPersons( response.data ))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage}/>
      <div className='form'>
        <Filter setFilter={setFilter}/>
      </div>

      <h2>Add new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotificationMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filter}/>
    </div>
  )

}


export default App
