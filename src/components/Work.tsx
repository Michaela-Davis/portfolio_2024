import React from "react";
import "./work.css";

interface WorkProps {
  imgURL: string;
  imgAlt: string;
  name: string;
  title: string;
  work: string;
};

export const Work: React.FC<WorkProps> = ({ imgURL, imgAlt, name, title, work }) => {
  return (
    <section className="section hero">
      <div className="container work">
        <div className="work__name-title-wrapper">
          <h1 className="work__name">{name}</h1>
          <p className="work__title">{title}</p>
        </div>
        <img className="work__image" src={imgURL} alt={imgAlt} />
        <p className="work__body">{work}</p>
      </div>
    </section>
  );
}