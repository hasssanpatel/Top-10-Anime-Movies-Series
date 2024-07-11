import React from 'react'
import './Series.css';
import TheWitcher from'./img/The Witcher.png';
import MyDemon from'./img/My Demon.png';
import PutYourHeadonMyShoulder from'./img/PutYourHeadonMyShoulder.png';
import GOT from'./img/GOT.png';

const Series = () => {
  const cards = [
    
    { imgSrc: "https://resizing.flixster.com/lnOFap5DPGddxBNGuoWumJVFlHM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11770893_b_h9_ak.jpg", title: "Lucifer", link: "https://www.netflix.com/in/title/80057918" },
    
    { imgSrc:TheWitcher, title: "The Witcher", link: "https://www.netflix.com/in/title/80189685" },
    
    { imgSrc: "https://wallpapers.com/images/featured/vincenzo-3j5xr10xgajr6dy9.jpg", title: "Vincenzo", link: "https://www.netflix.com/in/title/81365087" },
    
    { imgSrc: "https://wallpapercave.com/wp/wp9882014.jpg", title: "Extra Curricular", link: "https://www.netflix.com/in/title/80990668?source=35" },
    
    { imgSrc: "https://wallpapercave.com/wp/wp1917154.jpg", title: "Stranger Things", link: "https://www.netflix.com/in/title/80057281" },
    
    { imgSrc: MyDemon, title: "My Demon", link: "https://www.netflix.com/in/title/81716080" },
    
    { imgSrc: "https://i.pinimg.com/474x/7b/19/58/7b19584ec5ffba063a121508e78fe7a4.jpg", title: "My First-2 Love", link: "https://www.netflix.com/in/title/81026700?source=35" },
    
    { imgSrc: PutYourHeadonMyShoulder, title: "Put Your Head on My Shoulder", link: "https://www.netflix.com/in/title/81200229#:~:text=On%20the%20cusp%20of%20graduation,shakes%20up%20her%20daily%20routine.&text=Watch%20all%20you%20want." },
    
    { imgSrc: "https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630",
       title: "f.r.i.e.n.d.s", link: "https://www.netflix.com/in/title/70153404" },

    { imgSrc: GOT, title: "Game of Thrones", link: "https://www.imdb.com/title/tt0944947/" },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} className="card-img-top" alt="Series" />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href={card.link} className="btn btn-primary">Watch Now</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Series;
