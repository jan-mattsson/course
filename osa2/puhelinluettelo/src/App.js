import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonPersistence from './components/PersonPersistence'

import './index.css'

const App = () => {
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState({message:'',msgType:'none'})
  const [persons, setPersons] = useState([])

  useEffect(() => {
     PersonPersistence.GetAllPersons()
     .then(response => setPersons(response.data))
     .catch(e => setNotificationMessage({message: 'Failed to get data from server', msgType:'error'}))
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
      <Persons persons={persons} setPersons={setPersons} filter={filter} setNotification={setNotificationMessage}/>
    </div>
  )

}


export default App
