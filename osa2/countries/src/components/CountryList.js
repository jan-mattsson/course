const MAX_COUNTRIES_TO_LIST = 10

const Message = () => {
    return ( 
        <div>
            Too many matches. Specify another filter!
        </div>
    )
}

const CountryNames = ({countries, setCountryToShow}) => {
   //console.log('countries:',filteredCountries)
   if (countries.length > MAX_COUNTRIES_TO_LIST) return ( <div><Message/></div> )
   if (countries.length == 1) return (<div/>)
   const countryLines = 
      countries
      .map(c => <p key={c.cca3}>{c.name.common} <button onClick={(event) => setCountryToShow(c.cca3)}>Show</button></p>) 
    return (
        <div>
            {countryLines}
        </div>
    )
}

const CountryList = ({countries, setCountryToShow}) => {
    
    return (
        <div>
           <CountryNames countries={countries} setCountryToShow={setCountryToShow}/>
        </div>
    )
}

export default CountryList