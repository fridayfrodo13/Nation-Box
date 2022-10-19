import React from 'react'

const Cart = (props) => {
  const cart = props.cart
  //   let totalpopulation = 0
  //   for (let i = 0; i < cart.length; i++) {
  //     const country = cart[i]
  //     totalpopulation = totalpopulation + country.population
  //   }
  const totalpopulation = cart.reduce((a, b) => a + b.population, 0)
  return (
    <div>
      <h3>Cart : {cart.length}</h3>
      <h4>Total Population: {totalpopulation}</h4>
    </div>
  )
}

export default Cart
