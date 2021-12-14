import { getData } from '../utils/fetchData'
import { useState, useEffect, useContext } from 'react'
import ProductItem from '../components/product/ProductItem'
import { Head } from 'next/head'
import { DataContext } from '../store/GlobalState'

const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  useEffect(() => {
    setProducts(props.products)
  }, [props.products])

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
  }

  return (
    <div className="home_page">
      <div className="products">
        {products.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          products.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              handleCheck={handleCheck}
            />
          ))
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const res = await getData('product')
  console.log(res)
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  }
}

export default Home
