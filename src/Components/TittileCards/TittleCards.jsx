import React, { useEffect, useRef, useState } from 'react';
import './TittleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TittleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [movieData, setMovieData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjRiMzhjYTdmZWYzYjFhMDIzOWVkNzY2NjQ5Yzg0OSIsIm5iZiI6MTc0ODcxMDc2My45MzgsInN1YiI6IjY4M2IzNTZiZGUyZGU0YjExYjdiYTE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIq3HMnjnZkBGjPO4G7wDnISno__Xf7UlyYEVyhuFE0',
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += EventTarget.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="title-Cards">
      <h2> {title ? title : 'Popular on Netflix'} </h2>
      <div className="card-list" ref={cardsRef}>
        {movieData.map((card, index) => {
          return (
            <Link
              to={`/player/${card.id}`}
              className="card imagesCard"
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;
