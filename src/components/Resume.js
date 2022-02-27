import React, { useState } from 'react';

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
];

const Resume = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = sections.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (

      <React.Fragment key={item.company}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.company}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Resume;
