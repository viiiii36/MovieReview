import ReviewForm from "./ReviewForm";
import React from "react";
//ReviewList component takes an array of review objects as a prop and renders them as a list,
//displaying the rating and comment for each review item.
const ReviewList = ({reviews}) => {
  /*maps over the reviews array using the map() function, which iterates over each review in the array
  then generates a list item (<li>) for each review. The key attribute is set to the index
  {review.rating}: This displays the rating of the current review.
  {review.comment}: This displays the comment of the current review.*/
  return (
      <div>
       <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>Rating: {review.rating}, Comment: {review.comment}</li>
          ))}
        </ul>
      </div>
    );
  }
  export default ReviewList;