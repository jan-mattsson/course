const MAX_COUNTRIES_TO_LIST = 10

const Message = () => {
    return ( 
        <div>
            Too many matches. Specify another filter!
        </div>
    )
}

const CountryNames = ({filteredCountries}) => {
   //console.log('countries:',filteredCountries)
   if (filteredCountries.length > MAX_COUNTRIES_TO_LIST) return ( <div><Message/></div> )
   if (filteredCountries.length == 1) return (<div/>)
   const countryLines = 
      filteredCountries
      .map(c => c.name.common)
      .map(c => <p key={c}>{c}</p>) 
    return (
        <div>
            {countryLines}
        </div>
    )
}

const CountryList = ({countries}) => {
    
    return (
        <div>
           <CountryNames filteredCountries={countries}/>
        </div>
    )
}

export default CountryList