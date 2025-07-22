import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice.js'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col border rounded shadow-sm hover:shadow-lg transition duration-300 p-4">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.thumbnail || product.images[0]}
                    alt={product.title}
                    className="h-40 w-full object-contain mb-3 rounded"
                />
                <h3 className="font-semibold text-lg mb-1 hover:text-amber-400">
                    {product.title}
                </h3>
            </Link>
            <p className="text-sm text-gray-600 mb-2 truncate">{product.brand}</p>
            <p className="font-bold text-amber-400 text-xl mb-3">${product.price}</p>
            <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-auto bg-amber-400 text-white rounded py-2 hover:bg-amber-600 transition duration-200"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductItem
