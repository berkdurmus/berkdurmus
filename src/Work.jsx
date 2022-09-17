import React, { forwardRef } from "react";
import "./Work.css";
import useWindowSize from "./hooks/useWindowSize";
const Work = forwardRef((props, ref) => {
  const size = useWindowSize();
  const works = [
    {
      title: "Pulfy",
      logo: "https://www.pulfy.com/static/pulfy-landing-logo-55a80b5007ed46615d9336da3dd37819.png",
      position: "Co-founder",
      type: "Startup",
      body: "Developed an automated pipeline for periodically gathering 10.000 destinations' events & festivals, hotel-hostel-airbnb prices, visa information, restrictions, weather, flight costs, best times, and activities, and built a travel recommendation engine. We deployed all web, ios, and android apps. We use airflow for orchestration, docker for containerization, MongoDB for database, and AWS Lambda for serverless backend.",
      link: "https://pulfy.com",
      date: "July 2021 - Present",
    },
    {
      title: "Simplisco",
      logo: "https://www.pulfy.com/static/pulfy-landing-logo-55a80b5007ed46615d9336da3dd37819.png",
      position: "Co-founder",
      type: "Software Development Studio",
      body: "We help companies to find perfect stack and provide custom solutions for them. Solutions include full-stack development, customized crawlers and ip-rotators, keyword analyzer, serial non-copyrighted image selection tool, image optimization tool, data bindings, data streaming, notification service, internationalization, migration, stack planning, and analytics implementation.",
      link: "https://simplisco.com",
      date: "June 2019 - Present",
    },
  ];
  return (
    <div ref={ref} className="workHolder">
      <div className="workTitle">Work</div>

      <ul className="workCards">
        {works.map((work) => {
          return (
            <div
              className={size.width > 1000 ? "workContent" : "workContentMini"}
            >
              <img
                src={work.logo}
                alt={work.title}
                width={180}
                style={{ marginTop: "30px", marginBottom: "0px" }}
              />
              <div className="indivualWorkTitle">
                {work.position} at {work.title}
              </div>
              <div className="workType">{work.date}</div>
              <div className="individualWorkSubtitle">{work.body}</div>
              <button className="action" style={{ marginTop: "auto" }}>
                Visit Website
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
});

export default Work;
