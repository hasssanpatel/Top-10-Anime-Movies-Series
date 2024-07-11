import React from 'react'
import './Movies.css';
import Damsel from './img/Damsel.png'; 
import Fast  from './img/Fast X.png';
import RedNotice  from './img/RedNotice.png';
import Venom  from './img/Venom.png';
import AdamProject  from './img/AdamProject.png';
import  Munjya  from './img/Munjya.png';
import  it  from './img/it.png';
import  conjuring   from './img/conjuring.png';
import  ring   from './img/ring.png';
import  gk   from './img/gk.png';

const Movies = () => {
    const cards = [
        { imgSrc: Damsel, title: "Damsel", link: "https://www.netflix.com/in/title/80991090" },
        { imgSrc: Fast, title: "Fast X", link: "https://www.imdb.com/news/ni64085424/" },
        { imgSrc: Venom, title: "Venom", link: "https://www.netflix.com/in/title/80991034" },
        { imgSrc: RedNotice, title: "Red Notice", link: "https://www.netflix.com/in/title/81161626" },
        { imgSrc: AdamProject, title: "Adam Project", link: "https://www.netflix.com/in/title/81309354" },
        { imgSrc: gk, title: "godzilla vs kong ", link: "https://www.netflix.com/in/title/81309354" },
        { imgSrc: Munjya, title: "Munjya", link: "https://www.imdb.com/title/tt27995594/" },
        { imgSrc: it, title: "It", link: "https://www.imdb.com/title/tt1396484/?ref_=fn_al_tt_1" },
        { imgSrc: conjuring , title: "conjuring ", link: "https://www.imdb.com/title/tt1457767/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_conjuring" },
        { imgSrc: ring, title: "Ring", link: "https://www.rottentomatoes.com/m/ring" },
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
    

export default Movies
