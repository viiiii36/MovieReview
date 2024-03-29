import ReviewForm from "./ReviewForm";
import React from "react";
const ReviewList = ({reviews}) => {
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