
const Country = ({countries, countryToShow}) => {
    let country = {}
    if (countryToShow != '') {
      country = countries.find( c => c.cca3 === countryToShow)
    } else if (countries.length == 1) {
      country = countries[0]
    } else {
      return (<div/>)
    }
    
    console.log('CountryToShow', countryToShow)
    console.log('country:', country)
    console.log('langs', country.languages)
    
    const languageLines = 
      Object.values(country.languages)
      .map( lang => <li key={lang}>{lang}</li>)
    const flag = country.flags.png
    console.log('flag:',flag)
    return (
        <div>
            <h1>{country.name.common}</h1>
            capital {country.capital}<br/>
            area {country.area}<br/>

            <h3>languages</h3>
            <ul>
                {languageLines}
            </ul>
            <img src={flag}/>
        </div>
    )
}

export default Country