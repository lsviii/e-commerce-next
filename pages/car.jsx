import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'
import { set } from 'mongoose'

const Car = () => {
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  const [total, setTotal] = useState(0)

  return (
    <div className="row mx-auto">
      
      
      <div><h4>Carrinho de Compras:</h4></div>
      <div>

      <div className="d-flex justify-content-end">Envio de produtos</div>
      <div className="d-flex justify-content-end">CEP:
      <input className="d-flex justify-content-end" type="text"/></div>
      <div className="d-flex justify-content-end">Contato:
      <input className="d-flex justify-content-end" type="text"/></div>

      

      </div>

      
      
      
     
     

      <table>
        <tbody>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              dispatch={dispatch}
              cart={cart}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Car