import React, { useState } from 'react';
import './resume.css';

const sections = [
  {
    company: "Lone Wolf Technologies",
    title: "Software Engineer",
    content: `Developing several real estate technology apps using PHP, Java, Kotlin, React, Typescript, Python, SQL, Bash, Kanban Board, Github, Docker, AWS
    Was commended in our yearly check-in for my ability to quickly identify and fix problems that are not explicitly defined
    
    `,
  },
  {
    company: "Attabotics",
    title: "Software Engineer",
    content: `Wrote integration tests using C# and Microsoft SQL Server
    Refactored existing test framework to use object oriented principles and the state machine design pattern
    Created a CI/CD pipeline to only run specified tests to allow for quicker test development
    Created a python repo to easily find error logs from Azure Data Explorer using the Kusto Query Language
    `,
  },
  {
    company: "R3mote.io",
    title: "Software Engineer",
    content: `Developed the app backend using Python/Django, Docker and PostgreSQL
    Expanded backend API following RESTful API best practices
    Developed and refactored frontend components using React/Redux
    Wrote unit and integration tests using pytest, Jest, and Selenium 
    Added test runs into each of the CI/CD pipelines, only allowing deployment if all tests passed 
    `,
  },
  {
    company: "Probe",
    title: "Mechanical Engineer",
    content: `Designed oil field tools using 3D modeling and FEA
    Increased design speed by 25% by restructuring file dependencies and libraries using python and VBA
    Reduced workload by 25% by automating documentation process using python and VBA 
    Developed a patented novel production-logging sensor
    `,
  },
  {
    company: "MEDAL Labs",
    title: "Software Engineer",
    content: `Built an app to convert accelerometer data of an inclinometer into displacement algorithms and display it in a live GUI using SIMULINK, MATLAB and GUIDE`,
  },
  {
    company: "Software Engineer",
    title: "ABB",
    content: `Created a unit-testing framework for an electro-magnetic solver using Python`,
  },
  {
    company: "Universal Pegasus International",
    title: "Software Engineering Student",
    content: `Improved accuracy of cost estimates by creating a set of excel spreadsheets linked together with VBA`,
  },
];

const Resume = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const createSection = (item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.company}>
        {/* <div className='flexbox-container' style={{display: "inline-block"}}> */}
        <div className='titleContainer'>
          <div className={`title ${active}`} style={{width: '100%', display: "inline-block"}} onClick={() => onTitleClick(index)}>
            <i className="dropdown icon"></i>
            {item.company}
          </div>
          <div className='title' style={{width: '100%', textAlign: 'right'}}>2</div>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );

  }

  const jobs = sections.map((item, index) => {
    return createSection(item, index)
  });

  return <div className="ui styled accordion">{jobs}</div>;
};

export default Resume;
