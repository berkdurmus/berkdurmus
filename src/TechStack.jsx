import React, { useState, forwardRef } from "react";
import { Icon } from "@iconify/react";
import "./TechStack.css";
const segmentedSwitch = [
  { title: "All", key: "all", id: 0 },
  { title: "Languages", key: "language", id: 1 },
  { title: "Frontend", key: "frontend", id: 2 },
  { title: "Backend", key: "backend", id: 3 },
  { title: "Data", key: "data", id: 4 },
  { title: "Devops", key: "devops", id: 5 },
  { title: "Utilities", key: "utilities", id: 6 },
  { title: "Business Tools", key: "tools", id: 7 },
];
const techStack = [
  { title: "Javascipt", icon: "akar-icons:javascript-fill", type: "language" },
  { title: "Typescript", icon: "cib:typescript", type: "language" },
  { title: "Python", icon: "akar-icons:python-fill", type: "language" },
  { title: "React", icon: "akar-icons:react-fill", type: "frontend" },
  {
    title: "React Native",
    icon: "tabler:brand-react-native",
    type: "frontend",
  },
  { title: "Redux", icon: "akar-icons:redux-fill", type: "frontend" },
  { title: "Remix", icon: "simple-icons:remix", type: "frontend" },
  { title: "Next", icon: "cib:next-js", type: "frontend" },
  { title: "Gatsby", icon: "akar-icons:gatsby-fill", type: "frontend" },
  { title: "Sass", icon: "cib:sass-alt", type: "frontend" },
  { title: "Tailwind", icon: "bxl:tailwind-css", type: "frontend" },
  { title: "Docker", icon: "bxl:docker", type: "devops" },
  { title: "Webpack", icon: "cib:webpack", type: "devops" },
  { title: "Github", icon: "akar-icons:github-fill", type: "devops" },
  { title: "Amazon S3", icon: "simple-icons:amazons3", type: "data" },
  { title: "Amazon EC2", icon: "simple-icons:amazonec2", type: "data" },
  { title: "AWS Lambda", icon: "simple-icons:awslambda", type: "data" },
  { title: "Mongo", icon: "bxl:mongodb", type: "data" },
  { title: "Airflow", icon: "cib:apache-airflow", type: "data" },
  { title: "Express", icon: "simple-icons:express", type: "backend" },
  { title: "Node", icon: "akar-icons:node-fill", type: "backend" },
  { title: "Mixpanel", icon: "tabler:brand-mixpanel", type: "utilities" },
  { title: "Twilio", icon: "cib:twilio", type: "utilities" },
  { title: "Figma", icon: "akar-icons:figma-fill", type: "tools" },
  { title: "Spline", icon: "clarity:animation-solid", type: "tools" },
  { title: "Sketch", icon: "ant-design:sketch-outlined", type: "tools" },
  { title: "Slack", icon: "akar-icons:slack-fill", type: "tools" },
];
const TechStack = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div ref={ref} className="holderTechStack">
      <div className="titleTech">Tech Stack</div>

      <ul className="sblist">
        {segmentedSwitch.map((swc) => {
          return (
            <button
              className={
                selectedIndex === swc.id ? "switchButtonActive" : "switchButton"
              }
              key={swc.id}
              onClick={() => setSelectedIndex(swc.id)}
            >
              {swc.title}
            </button>
          );
        })}
      </ul>
      <ul className="cards">
        {techStack
          .filter((t) => {
            if (segmentedSwitch[selectedIndex].key !== "all") {
              return segmentedSwitch[selectedIndex].key === t.type;
            } else {
              return t;
            }
          })
          .map((tech) => {
            return (
              <div className="techCard">
                <Icon
                  className="cardIcon"
                  icon={tech.icon}
                  width="60"
                  height="60"
                />
                <div className="cardTitle">{tech.title}</div>

                <div className="cardSubtitle">{tech.type}</div>
              </div>
            );
          })}
      </ul>
    </div>
  );
});

export default TechStack;
