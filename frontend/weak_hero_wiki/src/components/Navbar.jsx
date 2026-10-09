import { Link } from 'react-router';

export const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 gap-4 shadow-md flex justify-content-between align-items-center">
            <Link to="/" className="text-white text-xl font-bold hover:text-pink-500">
                Home
            </Link>
            <div className="flex gap-4 justify-content-end align-items-center">
                <Link to="/" className="hover:underline">
                    Inicio
                </Link>
            </div>
        </nav>
    )
}