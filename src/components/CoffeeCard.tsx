
interface CoffeeCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-cafe-brown">{name}</h3>
          <span className="text-lg font-semibold text-cafe-brown">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CoffeeCard;
