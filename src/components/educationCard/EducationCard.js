import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescParagraph = ({descBullets}) => {
    return descBullets && descBullets.length > 0 ? (
      <p className="subTitle">{descBullets.join(" ")}</p>
    ) : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-courses">
                <p>
                  <GetDescParagraph descBullets={school.descBullets} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
