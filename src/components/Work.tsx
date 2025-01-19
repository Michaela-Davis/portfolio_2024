import React from "react";
import "./work.css";

interface WorkProps {
  imgURL: string;
  imgAlt: string;
  companyName: string;
  title: string;
  work: string;
  scope: string;
  role: string;
  year: string;
  companyBlurb: string;
};

export const Work: React.FC<WorkProps> = ({ imgURL, imgAlt, companyName, title, work, scope, role, year, companyBlurb }) => {
  return (
    <section className="section hero">
      <div className="container work">
        <div className="work__name-title-wrapper">
          <h1 className="work__name">{companyName}</h1>
          <p className="work__title">{title}</p>
        </div>
        <img className="work__image" src={imgURL} alt={imgAlt} />
        <div className="work__info-wrapper">
          <div className="work__info-items">
            <div className="work__info-item">
              <p>Scope: {scope}</p>
              <p>Role: {role}</p>
              <p>Year: {year}</p>
            </div>
            <div className="work__info-item">
              <p className="work__body">{companyBlurb}</p>
            </div>
          </div>
        </div>

        <p className="work__body">{work}</p>
      </div>
    </section>
  );
}