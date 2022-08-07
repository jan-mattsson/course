
import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({lat,lon}) => {

  const [temperature, setTemperature] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')
  const [windSpeed, setWindSpeed] = useState('')

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    console.log(apiKey)
    const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${apiKey}`
    
    console.log(uri)
    axios
      .get(uri)
      .then(response => {
        console.log('weather:', response.data)
        setTemperature(response.data.current.temp)
        setWindSpeed(response.data.current.wind_speed)
        setWeatherIcon(`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`)
      })
  }, [])

    
  return (
    <div>
        <h2>Weather</h2>
        temperature: {temperature}&deg;C <br/>
        <img src={ weatherIcon } /> <br/>
        wind: {windSpeed} m/s
    </div>
  )
}

export default Weather