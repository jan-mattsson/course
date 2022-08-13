import PersonPersistence from './PersonPersistence'

const deletePerson = (person, persons, setPersons, setNotification) => {
  
  const removePersonFromList = p => setPersons(persons.filter(p => p.id !== person.id))
  console.log('person to delete', person)
  if (window.confirm(`Delete ${person.name} from phone book?`)){
    PersonPersistence
      .DeletePerson(person.id)
      .then(response => removePersonFromList(person))
      .catch(exception => {
        console.log('exception..', exception)
        setNotification({message: `${person.name} has already been removed`, msgType: 'error' })
        removePersonFromList(person)
      })
  }
}

const Persons = ({persons,setPersons,filter, setNotification}) => {
    

    const personLines = () => { 
      console.log('All persons:', persons)
      
      let filteredPersons = persons.filter(p => p.name.toUpperCase().includes(filter.toUpperCase()))
      console.log('Filtered: ',filteredPersons)
      return (
        filteredPersons.map( p => <tr key={p.name}><td>{p.name}</td><td>{p.number}</td><td><button onClick={(event) => deletePerson(p, persons, setPersons, setNotification)}>delete</button></td></tr>) 
      )
    }
  
    return (
      <div>
        <table>
          <tbody>
            {personLines()}
          </tbody>
        </table>
        
      </div>     
    )
}

export default Persons
