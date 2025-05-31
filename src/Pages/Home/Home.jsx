import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TittleCards from '../../Components/TittileCards/TittleCards';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ex sit,
            dolor possimus fugit deleniti suscipit perferendis reprehenderit
            nobis autem, provident laborum temporibus?
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} /> More Info
            </button>
          </div>
          <TittleCards />
        </div>
      </div>
      <div className="more">
        <TittleCards title={'Block Busters'} category={'top_rated'} />
        <TittleCards title={'Only on Netflix'} category={'popular'} />
        <TittleCards title={'Upcoming'} category={'upcoming'} />
        <TittleCards title={'All time Favourite'} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
