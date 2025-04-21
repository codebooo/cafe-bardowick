
import { Star } from "lucide-react";

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({ name, date, rating, comment }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-cafe-brown">{name}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index} 
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default Review;
