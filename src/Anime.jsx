import React from 'react';
import './Anime.css';
import DragonBallZ from './img/DragonBallZ.png';
import DemonSlayer from './img/DemonSlayer.png';
import Blackclover from './img/Blackclover.png';
import Windbreaker from './img/Windbreaker.jpg';
import Vinland from './img/Vinland.png';
import AttackonTitan from './img/Attack on Titan.png';
import MyHeroAcademia from './img/My Hero Academia.png';
import OnePiece from './img/One Piece.png';
import Naruto from './img/Naruto.png';
import DeathNote from './img/Death Note.png';

const Anime = () => {
  const cards = [
    
    { imgSrc: DragonBallZ, title: "Dragon Ball Z", link: "https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super" },
    
    { imgSrc: DemonSlayer, title: "Demon Slayer", link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba" },
    
    { imgSrc: Blackclover, title: "Black Clover", link: "https://www.crunchyroll.com/series/GRE50KV36/black-clover" },
    
    { imgSrc: Windbreaker, title: "Wind Breaker", link: "https://www.crunchyroll.com/series/G3KHEVDPE/wind-breaker" },
    
    { imgSrc: Vinland, title: "Vinland Saga", link: "https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga" },
    
    { imgSrc: AttackonTitan, title: "Attack on Titan", link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan" },
    
    { imgSrc: MyHeroAcademia, title: "My Hero Academia", link: "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia" },
    
    { imgSrc: OnePiece, title: "One Piece", link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece" },
    
    { imgSrc: Naruto, title: "Naruto", link: "https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden" },
    
    { imgSrc: DeathNote, title: "Death Note", link: "https://www.netflix.com/in/title/70204970" },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <a href={card.link} className="btn">Watch Now</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Anime;
