import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Junaid Karikulam',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quas eaque nemo eius architecto repudiandae tempore',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Mohamed Nabeel MV',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quas eaque nemo eius architecto repudiandae tempore',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Sharaf Ali',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quas eaque nemo eius architecto repudiandae tempore',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Mohamed Shammas Shammu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quas eaque nemo eius architecto repudiandae tempore',
  },
];

export default function Testimonials () {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          className='container testimonials__container'
          modules={[Pagination]}
          pagination={{clickable:true}}
        >
          {data.map (d => (
            <SwiperSlide key={d.id} className='testimonials' >
              
                <div className="client__avatar">
                  <img src={d.avatar} alt="" />
                </div>
                <h5 className="client__name">{d.name}</h5>
                <small className="client__review">
                  {d.review}
                </small>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
