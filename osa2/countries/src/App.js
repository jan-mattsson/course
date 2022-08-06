import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import CountryList from './components/CountryList'
import Country from './components/Country'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
        console.log('countries count', countries.length)
      })
  }, [])
  
  const filteredCountries =  
    countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="App">
      <Filter setFilter={setFilter} />
      <CountryList countries={filteredCountries} />
      <Country countries={filteredCountries} />
    </div>
  );
}

export default App;
