import React from "react";
import "./review.css";


interface ReviewProps {
  imgURL: string;
  imgAlt: string;
  name: string;
  title: string;
  review: string;
  link: string;
};

export const Review: React.FC<ReviewProps> = ({ imgURL, imgAlt, name, title, review, link }) => {
  return (
      <div className="review">
        <div className="review__author">
          <img className="review__image" src={imgURL} alt={imgAlt} />
          <div className="review__name-title-wrapper">
            <p className="review__name">{name}</p>
            <p className="review__title">{title}</p>
          </div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="review__link">
          <p className="review__body">{review}</p>
        </a>
      </div>
  );
}