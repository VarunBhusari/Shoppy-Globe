import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const itemCount = useSelector(state =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    )
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md sticky top-0">
            <h1 className="text-2xl font-bold">
                <Link to="/" className="hover:underline text-amber-300">
                    Shoppy Globe
                </Link>
            </h1>
            <nav className="space-x-6">
                <Link to="/" className="hover:underline text-amber-300">
                    Home
                </Link>
                <Link to="/cart" className="hover:underline relative text-amber-300">
                    Cart
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 rounded-full px-2 text-xs font-bold">
                            {itemCount}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}

export default Header
