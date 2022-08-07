import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import CountryList from './components/CountryList'
import Country from './components/Country'


const App = () => {

  const [countries, setCountries] = useState([])
  const [countryToShow, setCountryToShow] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const filteredCountries =  
    countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div className="App">
      <Filter setFilter={(str) => {
          setCountryToShow('')
          setFilter(str)
          }
        } />
      <CountryList countries={filteredCountries} 
        countryToShow={countryToShow} 
        setCountryToShow={setCountryToShow}/>
      <Country countries={filteredCountries} countryToShow={countryToShow} />
    </div>
  );
}

export default App;
