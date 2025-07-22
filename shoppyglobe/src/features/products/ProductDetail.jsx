import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice.js'

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoading(false)
            })
            .catch(() => {
                setError('Failed to fetch product details.')
                setLoading(false)
            })
    }, [id])

    if (loading) return <p className="p-6 text-center">Loading product details...</p>
    if (error) return <p className="p-6 text-center text-red-600">{error}</p>
    if (!product) return null

    return (
        <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
            <img
                src={product.thumbnail || product.images[0]}
                alt={product.title}
                className="w-full h-96 object-contain rounded mb-6"
            />
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-xl text-amber-400 font-semibold mb-4">${product.price}</p>
            <p className="mb-6 text-gray-700">{product.description}</p>
            <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-amber-400 text-white py-3 px-6 rounded hover:bg-amber-600 transition"
            >
                Add to Cart
            </button>
        </main>
    )
}

export default ProductDetail
