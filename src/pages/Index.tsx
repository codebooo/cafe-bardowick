import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoffeeCard from "../components/CoffeeCard";
import Review from "../components/Review";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Star } from "lucide-react";
import React from "react";

const Index = () => {
  const coffeeItems = [
    {
      name: "Café Latte",
      description: "Cremig und sanft mit perfekt aufgeschäumter Milch",
      price: "3,50 €",
    },
    {
      name: "Cappuccino",
      description: "Ausgewogene Mischung aus Espresso, Milch und Schaum",
      price: "3,20 €",
    },
    {
      name: "Espresso",
      description: "Kräftig und aromatisch für den schnellen Energieschub",
      price: "2,20 €",
    },
    {
      name: "Americano",
      description: "Milder Kaffeegenuss mit weichem Geschmack",
      price: "2,50 €",
    },
    {
      name: "Flat White",
      description: "Cremiger Espresso mit samtiger Milch",
      price: "3,80 €",
    },
    {
      name: "Macchiato",
      description: "Intensiver Espresso mit Hauch von Milchschaum",
      price: "2,70 €",
    },
  ];

  const reviews = [
    {
      name: "Marie Schmidt",
      date: "15. März 2025",
      rating: 5,
      comment: "Absolut traumhafter Kaffee und die hausgemachten Kuchen sind ein Gedicht! Das Personal ist super freundlich und die Atmosphäre sehr gemütlich. Komme immer wieder gerne!"
    },
    {
      name: "Thomas Müller",
      date: "2. April 2025",
      rating: 4,
      comment: "Sehr leckerer Kaffee und eine schöne Auswahl an Kuchen. Die Einrichtung ist hübsch und man kann gut arbeiten. Nur manchmal ist es etwas voll."
    },
    {
      name: "Sabine Weber",
      date: "28. Februar 2025",
      rating: 5,
      comment: "Gemütliches Café mit einer tollen Atmosphäre. Der Cappuccino ist der beste in Bardowick und die selbstgemachten Torten sind himmlisch!"
    }
  ];

  const slideUpAnim = "animate-fade-in";
  const zoomImg = "transition-transform duration-300 hover:scale-105";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-cafe-yellow/30">
        {/* Hero section */}
        <section 
          className="relative bg-cover bg-center py-32"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)` 
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Willkommen im Café Bardowick</h1>
            <p className="text-xl text-white mb-8">Genießen Sie unseren handgebrühten Kaffee und hausgemachte Leckereien</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/opening-hours" 
                className="bg-cafe-peach hover:bg-cafe-pink text-cafe-brown font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Öffnungszeiten
              </Link>
              <a 
                href="#angebot" 
                className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 backdrop-blur-sm"
              >
                Unser Angebot
              </a>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className={`py-16 bg-cafe-peach ${slideUpAnim}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={slideUpAnim}>
                <h2 className="text-3xl font-bold text-cafe-brown mb-4">Über Café Bardowick</h2>
                <p className="text-lg text-gray-700 mb-6">
                  In unserem Café genießen Sie köstlichen, frisch gebrühten Kaffee und eine verlockende Auswahl an hausgemachten Kuchen.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Wir sind ein familiengeführtes Café mit einer Leidenschaft für qualitativ hochwertigen 
                  Kaffee und hausgemachte Backwaren.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  In unserem Café legen wir großen Wert auf eine angenehme Atmosphäre, in der 
                  Sie entspannen, arbeiten oder sich mit Freunden treffen können. Unser Kaffee wird 
                  mit Liebe zubereitet und unsere Kuchen werden täglich frisch gebacken.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-cafe-brown mr-2" />
                    <span>Große Str. 8, 21357 Bardowick</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-cafe-brown mr-2" />
                    <span>Mo-Fr: 8:30 - 18:00 & Sa-So: 8:30 - 18:00</span>
                  </div>
                </div>
              </div>
              <div className={`rounded-lg overflow-hidden shadow-xl ${slideUpAnim}`}>
                <img 
                  src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Café Inneres" 
                  className={`w-full h-full object-cover ${zoomImg}`}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Coffee offer section */}
        <section id="angebot" className={`py-16 ${slideUpAnim}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${slideUpAnim}`}>
              <h2 className="text-3xl font-bold text-cafe-brown mb-4">Unser Kaffee-Angebot</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Entdecken Sie unsere Auswahl an handgebrühtem Kaffee, zubereitet mit ausgewählten Bohnen 
                und viel Leidenschaft für den perfekten Genuss.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coffeeItems.map((coffee, index) => (
                <div className={slideUpAnim} key={index}>
                  <CoffeeCard 
                    name={coffee.name}
                    description={coffee.description}
                    price={coffee.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Reviews section */}
        <section className={`py-16 bg-cafe-green/30 ${slideUpAnim}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${slideUpAnim}`}>
              <h2 className="text-3xl font-bold text-cafe-brown mb-4">Das sagen unsere Besucher</h2>
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="ml-2 text-lg font-medium">4,6 von 5 Sternen</span>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Wir freuen uns über das positive Feedback unserer Gäste. Hier sind einige Meinungen 
                zu unserem Café und unseren Angeboten.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div className={slideUpAnim} key={index}>
                  <Review 
                    name={review.name}
                    date={review.date}
                    rating={review.rating}
                    comment={review.comment}
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a 
                href="https://maps.app.goo.gl/7eHmGGSwGdzpJvVZ9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-cafe-brown hover:bg-cafe-lightBrown text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <Star className="w-5 h-5 mr-2" />
                Bewertung auf Google abgeben
              </a>
            </div>
          </div>
        </section>
        
        {/* Special offers */}
        <section className={`py-16 ${slideUpAnim}`}>
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`p-8 md:p-12 ${slideUpAnim}`}>
                  <h2 className="text-3xl font-bold text-cafe-brown mb-4">Unser Angebot der Woche</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Genießen Sie unsere spezielle Kombination zum Vorteilspreis:
                  </p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-xl mb-2">Frühstücks-Spezial</h3>
                    <p className="text-gray-700 mb-1">• 1 Kaffee nach Wahl</p>
                    <p className="text-gray-700 mb-1">• 1 Stück hausgemachter Kuchen</p>
                    <p className="text-gray-700">• 1 frisch gepresster Orangensaft</p>
                  </div>
                  <div className="inline-block bg-cafe-brown text-white text-2xl font-bold py-2 px-4 rounded-lg">
                    Nur 7,90 €
                  </div>
                </div>
                <div className={`bg-cover bg-center ${zoomImg} ${slideUpAnim}`}
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)` }}>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className={`py-16 bg-cafe-pink ${slideUpAnim}`}>
          <div className={`container mx-auto px-4 text-center ${slideUpAnim}`}>
            <h2 className="text-3xl font-bold text-cafe-brown mb-6">Besuchen Sie uns</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Wir freuen uns darauf, Sie in unserem gemütlichen Café begrüßen zu dürfen und Ihnen 
              einen besonderen Kaffeegenuss zu bieten.
            </p>
            <Link 
              to="/opening-hours"
              className="bg-cafe-brown hover:bg-cafe-lightBrown text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Öffnungszeiten & Standort
            </Link>
          </div>
        </section>

        {/* Instagram Feed Embed */}
        <section className={`py-16 ${slideUpAnim}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-cafe-brown mb-8 text-center ${slideUpAnim}`}>Unser Café auf Instagram</h2>
            <div className="flex justify-center">
              <iframe
                src="https://www.instagram.com/p/C8xVvWCMapJ/embed"
                width="400"
                height="480"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Café Bardowick Instagram"
                className="rounded-lg border shadow-xl w-full max-w-md"
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-center mt-4 text-cafe-brown">
              <a
                href="https://www.instagram.com/cafe.bardowick/"
                className="underline hover:text-cafe-pink"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cafe.bardowick auf Instagram ansehen
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
