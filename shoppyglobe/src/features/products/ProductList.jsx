import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from './productsSlice'
import ProductItem from '../../components/ProductItem'
import { useFetchProducts } from './useFetchProducts'  // Import custom hook

const ProductList = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const { products, status, error } = useFetchProducts()

    useEffect(() => {
        dispatch(filterProducts(searchTerm))
    }, [searchTerm, dispatch])

    if (status === 'loading') return <p className="p-6 text-center text-gray-600">Loading products...</p>
    if (status === 'failed') return <p className="p-6 text-center text-red-600 font-semibold">{error}</p>

    return (
        <section className="max-w-7xl mx-auto p-6">
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full max-w-md mb-6 p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductList
