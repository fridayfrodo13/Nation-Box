import { useEffect, useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Country from './Components/Country/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data)
        // console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])

  const buttonHandler = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Loaded Country : {countries.length}</h1>
        <Cart cart={cart}></Cart>
        <br />
        <h3>Countries Name With Flags</h3>
        <br />
        {countries.map((country) => (
          <Country
            country={country}
            addButtonHandler={buttonHandler}
            key={country.flag}
          ></Country>
        ))}
      </header>
    </div>
  )
}

export default App
