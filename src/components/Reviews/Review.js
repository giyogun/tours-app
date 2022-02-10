import React, { useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "../../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const nextItemHandler = () => {
    setIndex((prev) => {
      if (prev === reviews.length - 1) return 0;
      return prev + 1;
    });
  };

  const previousItemHandler = () => {
    setIndex((prev) => {
      if (prev === 0) return reviews.length - 1;
      return prev - 1;
    });
  };

  const randomItemHandler = () => {
    const rand = Math.floor(Math.random() * reviews.length);

    setIndex(rand);
  };

  return (
    <div className="main">
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt="" className="person-img" />
            <img src="" alt="" />
            <i className="quote-icon">
              <ImQuotesRight />
            </i>
          </div>
          <div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
          </div>
          <button className="prev-btn" onClick={previousItemHandler}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextItemHandler}>
            <FaChevronRight />
          </button>
          <div>
            <button className="random-btn" onClick={randomItemHandler}>
              Surprise Me
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Review;

