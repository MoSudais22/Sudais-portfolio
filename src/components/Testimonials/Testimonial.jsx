import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Muhammad Sudais delivered an outstanding MERN stack project for our business. His expertise in React, Node.js, MongoDB, and Express ensured a seamless, high-performing web application. He was responsive, detail-oriented, and met all our requirements on time. Highly recommended!",
    },
    {
      img: profilePic2,
      review:
        "Muhammad Sudais developed an exceptional React.js project for our business. His expertise in building interactive, fast, and scalable web applications made a huge impact. He was professional, communicative, and delivered beyond expectations. Highly recommended!",
    },
    {
      img: profilePic3,
      review:
        "Muhammad Sudais did an excellent job on our React.js project. His expertise in creating dynamic, responsive, and high-performance web applications was impressive. He was professional, detail-oriented, and delivered everything on time. Highly recommended!",
    },
    {
      img: profilePic4,
      review:
        "Muhammad Sudais did an amazing job with our graphic design project. His creativity, attention to detail, and ability to bring ideas to life exceeded our expectations. The designs were professional, visually appealing, and delivered on time. Highly recommended!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
