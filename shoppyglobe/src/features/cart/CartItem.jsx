import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from './cartSlice.js'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const { product, quantity } = item

    return (
        <li className="flex items-center justify-between gap-4 border-b py-4">
            <img
                src={product.thumbnail || product.images[0]}
                alt={product.title}
                className="w-24 h-24 object-contain rounded"
            />
            <div className="flex-1">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-amber-400 font-bold">${product.price}</p>
                <div className="flex items-center gap-3 mt-2">
                    <button
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        disabled={quantity <= 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(product.id))} className="px-3 py-1 border rounded">
                        +
                    </button>
                </div>
            </div>
            <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
            >
                Remove
            </button>
        </li>
    )
}

export default CartItem
