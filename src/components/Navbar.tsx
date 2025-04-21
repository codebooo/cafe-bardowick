
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-cafe-brown py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              Café Bardowick
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-cafe-yellow px-3 py-2 rounded-md text-sm font-medium">
                Startseite
              </Link>
              <Link to="/opening-hours" className="text-white hover:text-cafe-yellow px-3 py-2 rounded-md text-sm font-medium">
                Öffnungszeiten
              </Link>
              <Link to="/" className="text-white hover:text-cafe-yellow px-3 py-2 rounded-md text-sm font-medium">
                Unser Café
              </Link>
              <Link to="/" className="text-white hover:text-cafe-yellow px-3 py-2 rounded-md text-sm font-medium">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-white text-sm">
              <span>Mo-Fr: 8:00 - 19:00 | Sa-So: 9:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
