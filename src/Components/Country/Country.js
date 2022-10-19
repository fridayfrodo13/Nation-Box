import React from 'react'
import './Country.css'

const Country = (props) => {
  const { flags, name, population, flag } = props.country
  const addButtonHandler = props.addButtonHandler
  //   console.log(props.country)
  //   const [{flags.png, name.common}] = [{flag, xname}]
  return (
    <div className="Flags">
      <img src={flags.png} alt="" />
      <h4>
        Country : {name.common} <small>{flag}</small>
      </h4>
      <h6>Population : {population}</h6>
      <button onClick={() => addButtonHandler(props.country)}>
        Add This Country
      </button>
    </div>
  )
}

export default Country
