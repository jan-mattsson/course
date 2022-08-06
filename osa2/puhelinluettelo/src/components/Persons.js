
const Persons = ({persons,filter}) => {
    const personLines = () => { 
      console.log('All persons:', persons)
      
      let filteredPersons = persons.filter(p => p.name.toUpperCase().includes(filter.toUpperCase()))
      console.log('Filtered: ',filteredPersons)
      return (filteredPersons.map( p => <p key={p.name}>{p.name} {p.phoneNumber}</p>) )
    }
  
    return (
      <div>
        {personLines()}
      </div>     
    )
}

export default Persons
