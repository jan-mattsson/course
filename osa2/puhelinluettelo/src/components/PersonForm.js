import axios from 'axios'
import { useState } from 'react'

const Validate = (validationRule, onSuccess, onInvalid) => {
    validationRule() ? onSuccess() : onInvalid()
} 

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')
    
    const addPerson = (event) => {
        event.preventDefault()
        Validate(
          () => !persons.find(p => p.name === newName ),
          () => {

            const newPerson = {name: newName, key: newName, number: newNumber }
            axios
              .post('http://localhost:3001/persons', newPerson)
              .then(response => {
                setPersons(persons.concat(newPerson))
                event.target.name.value = ''  
                event.target.phoneNumber.value = ''
                setNewName('')
                setNewNumber('')
            })            
          },
          () => alert(`${newName} is already added to the phonebook`)
        )
    }

    return (

      <form onSubmit={addPerson}>
        <div>
          name: <input name='name'  onChange={ event => setNewName(event.target.value)}/>          
        </div>
        <div>number: <input name='phoneNumber' onChange={event => setNewNumber(event.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
    

}

export default PersonForm