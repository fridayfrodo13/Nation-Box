import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data)
        // console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="Flags">
          <h1>Loaded Country : {countries.length}</h1>
          <h3>Countries Name With Flags</h3>
          <ol className="FlagsList">
            {countries.map((country) => (
              <li>
                {country.name.common} <br />{' '}
                <img src={country.flags.png} alt="" />
              </li>
            ))}
          </ol>
        </div>
      </header>
    </div>
  )
}

export default App
