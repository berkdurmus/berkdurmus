import React, { forwardRef } from "react";
import { Icon } from "@iconify/react";

import "./Work.css";

const educationStack = [
  {
    title: "Data Structures & Algorithms",
    icon: "bx:data",
    type: "Course",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Java Algorithms",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Digital Design",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Microcomputers",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Machine Learning",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Artificial Intelligence",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Telecommunications",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
  {
    title: "Neural Networks",
    icon: "bx:data",
    type: "Java",
    link: "http://www.cs.bilkent.edu.tr/~calkan/teaching/cs202/index.html",
  },
];

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="workHolder">
      <div className="workTitle">Education</div>
      <div className="educationContent">
        <div className="indivualWorkTitle">
          Bilkent University, Electrical and Electronics Engineering
        </div>
        <div className="workType">2014 - 2019</div>
        <div className="individualWorkSubtitle">
          I graduated from a top school in Turkey with a highly Computer Science
          oriented Electrical and Electronics Engineering degree. Obtained
          courses include Data Structures and Algorithms, System Design,
          Microcomputers, Machine Learning and so on. You can download my resume
          below.
        </div>
        <button className="action" style={{ marginTop: "auto" }}>
          Download My Resume
        </button>
      </div>

      {/*<ul className="cards">
        {educationStack.map((tech) => {
          return (
            <div className="eduCard">
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
      </ul>*/}
    </div>
  );
});

export default Education;
