import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonials.scss";
import { images } from "../../constants";

const Testimonials = () => {
  const staticData = [
    {        
        "testimonials": [
            {
                "name": "github",
                "company": "Github",
                "feedback": "He is a awesome developer having acute insights of the things he develops."
            }
        ]
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(staticData[0]["testimonials"]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    async function getTestimonialsData() {
      const response = await fetch(`https://portfolio-vzex.onrender.com/testimonialsdata/`);

      if (!response.ok) {        
        return;
      }
      const data = await response.json();
      setTestimonials(data[0]["testimonials"]);
    }
    getTestimonialsData();
    return;
  }, [testimonials.length]);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={images[testimonials[currentIndex].name]}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text test-text">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__testimonialsbg"
);
