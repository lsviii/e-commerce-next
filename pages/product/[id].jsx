import { getData } from '../../utils/fetchData'
import { useState, useContext } from 'react'

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    return(
        <div>
            <div>Detalhe dos Produtos</div>
            <div>{product.title}</div>
        </div>
    )
}

export async function getServerSideProps( {params: {id}} ){
    const res = await getData(`product/${id}`) 
    console.log(res)
    return {
        props: {product: res.product },
    }
} 


export default DetailProduct