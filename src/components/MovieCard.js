import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { Link } from 'react-router-dom';
import './MovieCard.css'; // Import a CSS file if you have styles

const MovieCard = ({ movie }) => (
  <div className="movie-card"> {/* Add a class for styling */}
    <h2>{movie.title}</h2>
    <Link to={`/movie/${movie.id}`}>View Details</Link>
  </div>
);

// Adding prop types for validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
