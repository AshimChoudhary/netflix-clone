import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjRiMzhjYTdmZWYzYjFhMDIzOWVkNzY2NjQ5Yzg0OSIsIm5iZiI6MTc0ODcxMDc2My45MzgsInN1YiI6IjY4M2IzNTZiZGUyZGU0YjExYjdiYTE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIq3HMnjnZkBGjPO4G7wDnISno__Xf7UlyYEVyhuFE0',
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt=""
        onClick={() => {navigate(-2)}}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://youtube.com/embed/${movieData.key}`}
        title="Trailer"
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{movieData.published_at.slice(0, 10)}</p>
        <p>{movieData.name}</p>
        <p>{movieData.type}</p>
      </div>
    </div>
  );
};

export default Player;
