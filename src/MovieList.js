import React, { useState, useEffect } from 'react';
import Movie from './Movie';
function MovieList() {
    //The first element in array,"movies", is the current state value. Initially, it's set to an empty array [].
    // As the component renders and updates, movies will hold the array of movie data fetched from the API.
    //The second element, "setMovies" is a function that enables updating the state.
    const [movies, setMovies] = useState([]);
    //useEffect hook fetching movie data from an API 
    useEffect(() => {
        //create the api
        const apiKey = 'd4de4a81a6cf4c5c480697c70bee92b5';
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
        //initiates a network request to the url
        fetch(url)
            //The json() method of the Response object reads the response body to completion and parses the body text as JSON
            .then(response => response.json())
            //The second .then() block receives this parsed JSON data as the data parameter
            .then(data => {
                //update the movies' state with the fetched movie data
                //triggers a re-render of the component
                setMovies(data.results);
            })
            //catches any errors that occur during the fetch process and logs them to the console
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    //mapping over the movies array using the map function. 
    //For each movie object in the movies array, it executes the provided function
    //rendering the Movie component with two props: key={movie.id} is a special prop used by React to identify elements uniquely within a list.
    //and movie={movie} passes the movie object as a prop to the Movie component. 
    //The movie prop contains all the information about a movie from api
    return (
      <div>
      <h1 className='text-center'>Movies</h1>
      <ul>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
    );
    
};

export default MovieList;
