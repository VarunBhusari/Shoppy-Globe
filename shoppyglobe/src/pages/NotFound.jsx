import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! Page not found.</p>
        <Link
            to="/"
            className="px-6 py-3 bg-amber-400 text-white rounded shadow hover:bg-amber-600 transition"
        >
            Go Home
        </Link>
    </div>
)

export default NotFound
