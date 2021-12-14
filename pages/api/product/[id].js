/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB'
import Product from '../../../models/productModel'

connectDB()

export default async (req, res) => {
    switch (req.method){
        case "GET":
            await getProduct(req, res)
            break
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.query
        const product = await Product.findById(id)
        if(!product) 
            return res.status(400).json({ err: "Este produto não existe!"})
        res.json( { product })
    } catch (err) {
        return res.status(500).json({ err: err.message})
    }
}