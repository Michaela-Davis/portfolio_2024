import "./work.css";

// TO DO: add reviews from coworkers below
interface WorkProps {
  imgURL: string;
  img2URL: string;
  imgAlt: string;
  img2Alt: string;
  companyName: string;
  title: string;
  work: string;
  scope: string;
  role: string;
  year: string;
  companyBlurb: string;
  skills: string;
  stack: string;
  live: string;
};

export const Work: React.FC<WorkProps> = ({ imgURL, img2URL, imgAlt, img2Alt, companyName, title, work, scope, role, year, companyBlurb, skills, stack, live }) => {
  return (
      <div className="container work">
        <div className="work__name-title-wrapper">
          <h1 className="work__name">{companyName}</h1>
          <p className="work__title">{title}</p>
        </div>
        <img className="work__image" src={imgURL} alt={imgAlt} />
        <div className="work__info-wrapper">
          <div className="work__info-items">
            <div className="work__info-item">
              <p><span className="grayText">Scope:</span>  {scope}</p>
              <p><span className="grayText">Role:</span> {role}</p>
              <p><span className="grayText">Year:</span> {year}</p>
              <p><span className="grayText">Live:</span> <a href={live}>{live}</a></p>
            </div>
            <div className="work__info-item">
              <p className="work__body"><span className="grayText">About {companyName}:</span> {companyBlurb}</p>
            </div>
          </div>
        </div>

        <img className="work__image" src={img2URL} alt={img2Alt} />
        <div className="work__info-wrapper">
          <div className="work__info-items">
            <div className="work__info-item">
              <p className="work__body"><span className="grayText">My work at {companyName}:</span> {work}</p>
            </div>
            <div className="work__info-item">
              <p><span className="grayText">Skills:</span> {skills}</p>
              <p><span className="grayText">Tech Stack:</span> {stack}</p>
            </div>
          </div>
        </div>
      </div>
  );
}