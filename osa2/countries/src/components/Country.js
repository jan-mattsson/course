
const Country = ({countries}) => {
    if (countries.length != 1) return (<div/>)
    
    const country = countries[0]
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