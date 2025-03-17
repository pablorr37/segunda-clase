import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Proyecto E-Commerce</Link>
                <ul className="flex gap-4">
                    <li><Link to="/" className="hover:underline"></Link>Inicio</li>
                    <li><Link to="/productos" className="hover:underline"></Link>Productos</li>
                    <li><Link to="/contacto" className="hover:underline"></Link>Contacto</li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;



