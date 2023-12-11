import React from 'react';
import './movie-card.css';

export const MovieCard = ({
  movie: {
    id,
    attributes: {
      poster,
      title,
      summary,
      box_office,
      budget,
      running_time,
      trailer
    }
  } }) => (
  <div key={id} className="movie-card">
    <img src={poster} loading="lazy" alt={`${title} poster`} />
    <div className="movie-details">
      <h2>{title}</h2>
      <p className="summary">&emsp;{summary}</p>
      <p><span>Box office: </span><span>{box_office}</span></p>
      <p><span>Budget: </span><span>{budget}</span></p>
      <p><span>Running time: </span><span>{running_time}</span></p>
      <a href={trailer}>Look for the teaser-trailer</a>
    </div>
  </div>
);