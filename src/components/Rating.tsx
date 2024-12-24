import { FC, useState } from "react";
import { FaStar } from "react-icons/fa";

type RatingProps = {
  initialRating?: number; // Nilai awal rating (opsional)
  onRatingChange?: (rating: number) => void; // Callback saat rating berubah
};

const Rating: FC<RatingProps> = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number | null>(null);

  const handleRating = (rate: number) => {
    setRating(rate);
    if (onRatingChange) {
      onRatingChange(rate);
    }
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          className="focus:outline-none">
          <FaStar
            size={24}
            className={`transition-colors duration-200 
              ${(hover || rating) >= star ? "text-yellow-400" : "text-gray-300"}`}
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;
