import Stars from "./Stars";
import ReviewList from "./ReviewList";
import { useState } from "react";
const ReviewForm = () => {
  //initializes a state variable reviews using the useState hook
    const [reviews, setReviews] = useState([]);
  //initializes a state variable formData to manage the form data for submitting reviews
  //contains two fields: comment for the review text and rating for the star rating
    const [formData, setFormData] = useState({ comment: '', rating: '' });
  /*Event Handlers:
    handleRate function updates the rating field in the formData state when a user selects a rating.*/
    const handleRate = (rating) => {
      setFormData({ ...formData, rating: rating });
    };
  /*handleSubmit function is called when the form is submitted. 
  prevents the default form submission behavior, 
  adds the current formData (comment and rating) to the reviews state,
   and resets the formData state to its initial state (empty comment and rating)*/
    const handleSubmit = (event) => {
      event.preventDefault();
      setReviews([...reviews, formData]);
      setFormData({ comment: '', rating: '' });
    };
    /*component Stars being rendered: receives a prop onRate =function (handleRate) called when a user rates something.
    */
    return (
      <div className="container">
        <Stars onRate={handleRate} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={(event) => setFormData({ ...formData, comment: event.target.value })}
              className="form-control"
              rows="3"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <ReviewList reviews={reviews} />
      </div>
    );
  };

  export default ReviewForm;