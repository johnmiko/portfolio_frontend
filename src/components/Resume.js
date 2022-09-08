import React, { useState } from 'react';
import './resume.css';

const resume_obj = [
  {
    company: "Hivestack",
    title: "Software Engineer",
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 7),
    leftBecause: "Laid off during extended probation. Was too much of a team-player which they didn't need currently",
    content: ["Developing and maintaining the backend ad-server. Adding new features and improving the performance of existing code using Python, Github, AWS, Jira"]
    ,
  },
  {
    company: "Lone Wolf Technologies",
    title: "Software Engineer",
    startDate: new Date(2021, 7),
    endDate: new Date(2022, 3),
    leftBecause: "Moved from Alberta to Quebec, Canada. Asked Lone Wolf if they could set up taxes in the province of Quebec for me and they said no",
    content: ["Developing several real estate technology apps using PHP, Java, Kotlin, React, Typescript, Python, SQL, Bash, Kanban Board, Github, Docker, AWS", 
    "Was commended in our yearly check-in for my ability to quickly identify and fix problems that are not explicitly defined"]
    ,
  },
  {
    company: "Self Employed",
    title: "Software Engineer",
    startDate: new Date(2020, 5),
    endDate: new Date(2021, 7),
    leftBecause: "Started well, didn't end well",
    content: ["Quantitative analysis of the stock market using python", 
      "Developed strategies and algorithms to find trades with the highest probability of success and profit"]
    ,
  },
  {
    company: "R3mote.io",
    title: "Software Engineer",
    startDate: new Date(2019, 7),
    endDate: new Date(2020, 5),
    leftBecause: "Received a paycut due to covid. Wanted to try trading stocks as full time income",
    content: ['Developed the app backend using Python/Django, Docker and PostgreSQL',
    'Expanded backend API following RESTful API best practices',
    'Developed and refactored frontend components using React/Redux',
    'Wrote unit and integration tests using pytest, Jest, and Selenium',
    'Added test runs into each of the CI/CD pipelines, only allowing deployment if all tests passed',
    ],
  },
  {
    company: "Probe",
    title: "Mechanical Engineer",
    startDate: new Date(2017, 3),
    endDate: new Date(2019, 7),
    leftBecause: "Switched professions from mechanical to software engineering",
    content: ['Designed oil field tools using 3D modeling and FEA',
    'Increased design speed by 25% by restructuring file dependencies and libraries using python and VBA',
    'Reduced workload by 25% by automating documentation process using python and VBA',
    'Developed a patented novel production-logging sensor',
    ],
  },
  {
    company: "Geometric Energy Corporation",
    title: "Mechanical Engineer",
    startDate: new Date(2016, 4),
    endDate: new Date(2016, 9),
    leftBecause: "Didn't believe in the main product of the company",
    content: ["Theoretical design and physical construction of novel low-concentration photovoltaic system prototypes; including using different mirror shapes and materials along with efficiency losses due to heat trapping",
      "Initiated and conducted a feasibility study of the device: finding the range of levelized cost of energy, factoring in different geographies, margins, and markets"],
  },
  {
    company: "Micro Engineering Dynamics and Automation Lab (MEDAL) at the University of Calgary",
    title: "Software Engineering - Masters",    
    startDate: new Date(2016, 2),
    endDate: new Date(2016, 5),
    leftBecause: "Realized I didn't want to do my Masters",
    content: ['Built an app to convert accelerometer data of an inclinometer into displacement algorithms and display it in a live GUI using SIMULINK, MATLAB and GUIDE'],
  },
  {
    company: "ABB",
    title: "Software Engineer",
    startDate: new Date(2014, 4),
    endDate: new Date(2015, 4),
    leftBecause: "Internship",
    content: ['Created a unit-testing framework for an electro-magnetic solver using Python'],
  }
];

 
function getTimeBetween(startDate, endDate = new Date()) {
  // debugger
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
  const CreateSection = (item, index) => {
    // debugger;
    const [active, setActiveIndex] = useState('active');
    function join(t, a, s) {
      function format(m) {
         let f = new Intl.DateTimeFormat('en', m);
         return f.format(t);
      }
      return a.map(format).join(s);
    }

    const onTitleClick = () => {
      if (active === 'active'){
        setActiveIndex('');
      }        
      else {
        setActiveIndex('active');
      }      
    };
    // debugger;
    const timeBetween = getTimeBetween(item.startDate, item.endDate)   
    const options = [{year: 'numeric'}, {month: '2-digit'}];
    const startDate = join(item.startDate, options, '-');
    const endDate = join(item.endDate, options, '-');    
    const dates = `${startDate} - ${endDate} · ${timeBetween}`
    // debugger;
    const content = item.content.map((text, index) => {
      return <li>{text}</li>
    });

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
            <div className='job-stuff'>{item.title}</div>
            <div className='job-stuff'>{dates}</div>
          </div>                    
        </div>
        <div className={`content ${active}`}>
          <ul style={{'margin': 0, paddingInlineStart: '20px'}}>
          {content}          
          </ul>          
        </div>
        <div class="ui divider"/>
      </React.Fragment>
    );

  }
  // debugger
  const jobs = resume_obj.map((item, index) => {
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
    <div style={{'margin-left': '1%'}}>
      <ExpandCollapseAll></ExpandCollapseAll>
      {/* {expandCollapseAll} */}
      <div className="ui accordion" style={{'width': '50%'}}>
        {jobs}
      </div>
    </div>)
};

export default Resume;
