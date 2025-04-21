
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-brown py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Café Bardowick</h3>
            <p className="mb-2">Große Str. 8, 21357 Bardowick</p>
            <p className="mb-2">21335 Bardowick</p>
            <p className="mb-2">Tel: 04131 12345</p>
            <p>Email: info@cafe-blossom.de</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <p className="mb-2">Montag - Freitag: 8:30 - 18:00</p>
            <p className="mb-2">Samstag - Sonntag: 8:30 - 18:00</p>
            <p className="mb-2">Feiertage: Meist geschlossen</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-cafe-yellow">Startseite</Link>
              </li>
              <li>
                <Link to="/opening-hours" className="hover:text-cafe-yellow">Öffnungszeiten</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-cafe-yellow">Datenschutz</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-cafe-yellow">Impressum</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2025 Café Bardowick. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
