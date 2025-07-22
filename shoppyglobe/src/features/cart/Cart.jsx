import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem.jsx'
import { Link } from 'react-router-dom'

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

    if (items.length === 0) {
        return (
            <p className="text-center mt-12 text-gray-600">
                Your cart is empty.{' '}
                <Link to="/" className="text-amber-400 underline">
                    Go shopping
                </Link>{' '}
                now!
            </p>
        )
    }

    return (
        <main className="max-w-5xl mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <CartItem key={item.product.id} item={item} />
                ))}
            </ul>
            <div className="flex justify-end items-center mt-8 text-xl font-semibold">
                Total: <span className="ml-4 text-amber-400">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-end mt-6">
                <Link
                    to="/checkout"
                    className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition"
                >
                    Proceed to Checkout
                </Link>
            </div>
        </main>
    )
}

export default Cart
