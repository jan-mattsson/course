import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      key: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const Validate = (validationRule, onSuccess, onInvalid) => {
     validationRule() ? onSuccess() : onInvalid()
  } 


  const addPerson = (event) => {
    event.preventDefault()
    Validate(
      () => !persons.find(p => p.name === newName ),
      () => {
        setPersons(persons.concat({name: newName, key: newName }))
        event.target.name.value = ''  
      },
      () => alert(`${newName} is already added to the phonebook`)
    )
  }

  const personLines = persons.map( p => <p key={p.name}>{p.name}</p> )
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input name='name'  onChange={ event => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personLines}
      </div>
    </div>
  )

}

export default App
