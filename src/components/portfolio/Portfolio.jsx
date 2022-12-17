import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data=[
  {
    id:1,
    image:IMG1,
    title:'Crypto ;adsjfajf;lsdajfjsadfsdkf',
    github:'https://github.com',
    demo:'http:/dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image:IMG2,
    title:'React ldsfaldksfjlskj',
    github:'https://github.com',
    demo:'http:/dribbble.com/Alien_pixels'
  },
  {
    id:3,
    image:IMG3,
    title:'illustrtorlkadsflksafhds',
    github:'https://github.com',
    demo:'http:/dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image:IMG4,
    title:'binancekldsjhaksdfgdsg',
    github:'https://github.com',
    demo:'http:/dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image:IMG5,
    title:'Photoshopladshfjsdhflk',
    github:'https://github.com',
    demo:'http:/dribbble.com/Alien_pixels'
  },
  {
    id:6,
    image:IMG6,
    title:'figmafkasjhflkjah',
    github:'https://github.com',
    demo:'http:/dribbble.com/Alien_pixels'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Me Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((d)=>(

        <article key={d.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={d.image} alt={d.title} />
          </div>
          <h3>{d.title}</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/bilunabeel" className="btn"
              target={'_blank'}>Github</a>
            <a href="https://www.dribbble.com/Alien_pixels" className="btn"
              target={'_blank'}>Live Demo</a>
          </div>
        </article>
        ))}
        
      </div>
    </section>
  );
}
