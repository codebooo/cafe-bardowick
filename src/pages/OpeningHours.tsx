
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Clock, Info } from "lucide-react";

const OpeningHours = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-cafe-yellow/30">
        {/* Hero section */}
        <section className="bg-cafe-peach py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cafe-brown text-center">Öffnungszeiten & Standort</h1>
          </div>
        </section>
        
        {/* Opening hours and location */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Opening hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-cafe-brown mr-3" />
                  <h2 className="text-3xl font-bold text-cafe-brown">Öffnungszeiten</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Montag</span>
                    <span>8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Dienstag</span>
                    <span>8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Mittwoch</span>
                    <span>8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Donnerstag</span>
                    <span>8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Freitag</span>
                    <span>8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Samstag</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Sonntag</span>
                    <span>9:00 - 18:00</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-cafe-green/30 rounded-lg">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-cafe-brown mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      An Feiertagen haben wir von 10:00 - 17:00 Uhr geöffnet. 
                      Bitte beachten Sie mögliche Sonderöffnungszeiten an besonderen Tagen.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-cafe-brown mr-3" />
                  <h2 className="text-3xl font-bold text-cafe-brown">Standort</h2>
                </div>
                
                <address className="not-italic mb-6">
                  <p className="text-lg mb-2">Café Bardowick</p>
                  <p className="mb-1">Bardowicker Str. 12</p>
                  <p className="mb-1">21335 Bardowick</p>
                  <p className="mb-1">Tel: 04131 12345</p>
                  <p className="mb-1">Email: info@cafe-blossom.de</p>
                </address>
                
                {/* Google Maps iframe */}
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.5954390974947!2d10.394188776566182!3d53.30575657189183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1cb2939a968a7%3A0x4257b9b53a232d0!2sBardowick%2C%20Deutschland!5e0!3m2!1sde!2sde!4v1713022348754!5m2!1sde!2sde" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Anfahrt</h3>
                  <p className="text-gray-700 mb-4">
                    Unser Café befindet sich im Herzen von Bardowick, nur wenige Gehminuten vom historischen Zentrum entfernt.
                  </p>
                  <p className="text-gray-700">
                    Parkmöglichkeiten sind direkt vor dem Café und in der Umgebung vorhanden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OpeningHours;
