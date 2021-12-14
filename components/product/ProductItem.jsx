import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Action'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */

const ProductItem = ({ product, handleCheck }) => {
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state
  const { _id, inStock, checked, images, title, description, price } = product
  const userLink = () => {
    return (
      <>
        <Link href={`product/${_id}`}>
          <a className="btn btn-info" style={{ marginRight: '5px', flex: 1 }}>
            View
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: '5px', flex: 1 }}
          disabled={inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Comprar
        </button>
      </>
    )
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      {auth.user && auth.user.role === 'admin' && (
        <input
          type="checkbox"
          checked={checked}
          className="position-absolute"
          style={{ height: '20px', width: '20px' }}
          onChange={() => handleCheck(_id)}
        />
      )}
      <img className="card-img-top" src={images[0].url} alt={images[0].url} />
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={title}>
          {title}
        </h5>

        <div className="row justify-content-between mx-0">
          <h6 className="text-danger">R$ {price}</h6>
          {inStock > 0 ? (
            <h6 className="text-danger">Em estoque: {inStock}</h6>
          ) : (
            <h6 className="text-danger">Não disponível</h6>
          )}
        </div>

        <p className="card-text" title={description}>
          {description}
        </p>

        <div className="row justify-content-between mx-0">
          {!auth.user || auth.user.role !== 'admin' ? userLink() : adminLink()}
        </div>
      </div>
    </div>
  )
}

export default ProductItem