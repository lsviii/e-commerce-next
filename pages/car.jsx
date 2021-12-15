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
      
      
      
      <div>
      <div className="d-flex justify-content-between m-3"> 
      <div className="card text-white bg-success border-success p-2 col-example text-left">Meu Carrinho de Compras</div>
      <input className="p-2 col-example border-success" type="text" placeholder="CEP"/>
      <input className="p-2 col-example border-success" type="text" placeholder="Telefone"/>        
      <button className="p-2 col-example text-left btn btn-success btn-sm" type="button">COMPRAR</button>
      </div>
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