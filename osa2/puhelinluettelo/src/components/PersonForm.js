import { useState } from 'react'
import AddNewPerson from './PersonPersistence'
import PersonPersistence from './PersonPersistence'

const Validate = (validationRule, onSuccess, onInvalid) => {
    validationRule() ? onSuccess() : onInvalid()
} 

const PersonForm = ({persons, setPersons, setNotification}) => {
    const [newName, setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')    
    
    const addPerson = (event) => {
        event.preventDefault()

// if exists with different number number --> confirm & update
// if exists with same number --> give error message??

        const handleResponse = (response) => {
          console.log("PUT response", response)
          const index = persons.findIndex(p => p.id === response.data.id)
          if ( index === -1){
            console.log('Added', response.data)
            setPersons(persons.concat(response.data))
          }
          else {
            console.log('Replace', response.data)
            const tmp = Array.from(persons)
            tmp[index] = response.data
            setPersons(tmp)
          }
          console.log('set message')
          setNotification(`Added ${response.data.name}`)  
          event.target.name.value = ''  
          event.target.phoneNumber.value = ''
          setNewName('')
          setNewNumber('')
        }

        Validate(
          () => !persons.find(p => p.name === newName ),
          () => {
            const newPerson = {name: newName, key: newName, number: newNumber }
            PersonPersistence.AddNewPerson(newPerson)
              .then(handleResponse)
          },
          () => {            
            const person = persons.find(p => p.name === newName)
            if (window.confirm(`${person.name} is already in the phonebook, replace the old number with a new one?`))
              PersonPersistence.UpdatePerson({...person, number: newNumber})
                .then(handleResponse)
          }
        )
    }

    return (
      <form className='form' onSubmit={addPerson}>        
          <div className='label'>name:</div>
          <div className='input'><input name='name'  onChange={ event => setNewName(event.target.value)}/></div>
          <div className='label'>number:</div>
          <div className='input'><input name='phoneNumber' onChange={event => setNewNumber(event.target.value)}/></div>
          <div className='label'><button type="submit" disabled={newName === ''}>add</button></div>
      </form>
    )
    
}

export default PersonForm