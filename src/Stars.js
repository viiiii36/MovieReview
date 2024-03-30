import { useState } from "react";
const Stars = ({onRate}) => {
  // rating state holds the current rating selected by the user. Initially, it's set to null.
    const [rating, setRating] = useState(null);
  //when a user clicks on a star to change the rating, rating state is updated
  // with the new rating selected by the user and then calls the onRate function passed as a prop, passing the new rating as an argument.
    const handleRatingChange = (newRating) => {
      setRating(newRating);
      onRate(newRating);
    };
  /*renders a star rating where users can click on stars to select a rating=> it updates the state and calls 
  a function passed via props to notify the parent component of the new rating*/
  /*map over an array of numbers from 1 to 5, representing the star ratings.
  key={newRating} assigns a unique key to each star element
  If the newRating is less than or equal to the current rating, the star color is set to gold, indicating that it's selected.
  Otherwise, it's set to gray.
  onClick={() => handleRatingChange(newRating) sets up a click event handler for each star. 
  When a user clicks on a star, it calls the handleRatingChange function with the corresponding rating.
*/
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