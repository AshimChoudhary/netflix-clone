import React, { useEffect, useRef } from 'react';
import './TittleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TittleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += EventTarget.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="title-Cards">
      <h2> {title ? title : 'Popular on Netflix'} </h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card imagesCard" key={index}>
              <img src={card.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;
