import React, { useState } from 'react';
import './resume.css';

const jobs_text = [
  {
    company: "Hivestack",
    title: "Software Engineer",
    startDate: new Date(2022, 5),
    content: `Developing several real estate technology apps using PHP, Java, Kotlin, React, Typescript, Python, SQL, Bash, Kanban Board, Github, Docker, AWS
    Was commended in our yearly check-in for my ability to quickly identify and fix problems that are not explicitly defined
    `,
  },
  {
    company: "Lone Wolf Technologies",
    title: "Software Engineer",
    startDate: new Date(2021, 8),
    endDate: new Date(2022, 4),
    content: `Developing and maintaining the backend ad-server. Adding new features and improving the performance of existing code using Python, Github, AWS, Jira
    `,
  },
  {
    company: "Self Employed",
    title: "Software Engineer",
    startDate: new Date(2020, 6),
    endDate: new Date(2021, 8),
    content: `Quantitative analysis of the stock market using python. Developed strategies and algorithms to find trades with the highest probability of success and profit
    `,
  },
  {
    company: "R3mote.io",
    title: "Software Engineer",
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 6),
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
    startDate: new Date(2017, 4),
    endDate: new Date(2019, 8),
    content: `Designed oil field tools using 3D modeling and FEA
    Increased design speed by 25% by restructuring file dependencies and libraries using python and VBA
    Reduced workload by 25% by automating documentation process using python and VBA 
    Developed a patented novel production-logging sensor
    `,
  },
  {
    company: "MEDAL Labs",
    title: "Software Engineering Student",
    startDate: new Date(2016, 3),
    endDate: new Date(2016, 6),
    content: `Built an app to convert accelerometer data of an inclinometer into displacement algorithms and display it in a live GUI using SIMULINK, MATLAB and GUIDE`,
  },
  {
    company: "Software Engineering Intern",
    title: "ABB",
    startDate: new Date(2014, 5),
    endDate: new Date(2015, 5),
    content: `Created a unit-testing framework for an electro-magnetic solver using Python`,
  },
  {
    company: "Universal Pegasus International",
    title: "Software Engineering Student",
    startDate: new Date(2013, 3),
    endDate: new Date(2013, 8),
    content: `Improved accuracy of cost estimates by creating a set of excel spreadsheets linked together with VBA`,
  },
];

 
function monthDiff(startDate, endDate) {
  // console.log('startDate')
  // console.log(startDate)
  // console.log('endDate')
  // console.log(endDate)
  let months = endDate.getMonth() - startDate.getMonth() + 1
  let years = endDate.getFullYear() - startDate.getFullYear() 
  if (months < 0) {
    months = 12 + months
    years -= 1
  }
  let year_text = ''
  if (years === 1) {
    year_text = years + ' year'
  }
  else if (years > 1) {
    year_text = years + ' years'
  }
  
  let month_text = ''
  if (months === 1) {
    month_text = months + ' month'
  }
  else if (months > 1) {
    month_text = months + ' months'
  }
  let date_text = ''
  if (year_text && month_text) {
    date_text = year_text + ', ' + month_text
  }
  else if(!year_text) {
    date_text = month_text
  }
  else {
    date_text = year_text
  }
  return date_text;
}
//   return endDate.getMonth() - startDate.getMonth() + 
//     (12 * (endDate.getFullYear() - startDate.getFullYear()))
//  }

const Resume = () => {  
  const createJobDatesEl = (startDate, endDate) => {
    if (!endDate) {
      endDate = new Date();
    }
    const daysBetween = monthDiff(startDate, endDate)
    // console.log('days between');
    // console.log(daysBetween)
    return (daysBetween

    )
  }
  const CreateSection = (item, index) => {
    const [active, setActiveIndex] = useState('active');

    const onTitleClick = () => {
      if (active === 'active'){
        setActiveIndex('');
      }        
      else {
        setActiveIndex('active');
      }      
    };
    // const active = index === activeIndex ? '' : 'active';
    const dateThing = createJobDatesEl(item.startDate, item.endDate) 

    return (
      <React.Fragment key={item.company}>
        <div 
          className={`title ${active}`} 
          // use arrow function or else onTitleClick is run when things render
          onClick={() => onTitleClick()}
        >
          <div className={`title ${active}`} style={{width: '100%', display: "inline-block"}} onClick={() => onTitleClick(index)}>
            <i className="dropdown icon"></i>
            {item.company}
          </div>
          <div className='title' style={{width: '100%', textAlign: 'right'}}>{dateThing}</div>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );

  }

  const jobs = jobs_text.map((item, index) => {
    return CreateSection(item, index)
  });
  const ExpandCollapseAll = () => {
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Expand/Collapse All - Not Implemented</label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ExpandCollapseAll></ExpandCollapseAll>
      {/* {expandCollapseAll} */}
      <div className="ui styled accordion">
        {jobs}
      </div>
    </div>)
};

export default Resume;
