import { useState } from "react";
const Stars = ({onRate}) => {
    const [rating, setRating] = useState(null);
  
    const handleRatingChange = (newRating) => {
      setRating(newRating);
      // Pass the rating to the parent component
      onRate(newRating);
    };
  
    return (
      <div>
        {[1, 2, 3, 4, 5].map((newRating) => (
          <span
            key={newRating}
            style={{ cursor: 'pointer', color: newRating <= rating ? 'gold' : 'gray' }}
            onClick={() => handleRatingChange(newRating)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  export default Stars;