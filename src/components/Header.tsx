import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto  text-center">
          <div className="space-x-4">
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link to="/concepts" className="hover:text-gray-300">
              Concepts
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
