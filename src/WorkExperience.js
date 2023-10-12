import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import RBCLogo from './img/rbc-logo.png';
import RBCCapitalMarketsLogo from './img/rbc-capital-markets-logo.png';
import IBMLogo from './img/ibm-logo.png';
import BlackBerryLogo from './img/blackberry-logo.png';
import OpenTextLogo from './img/opentext-logo.png';
import AnalyticlyLogo from './img/analyticly-logo.png';
import RIIS_LLCLogo from './img/riis_llc-logo.png';

export function WorkExperience() {
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)'}}
                date = 'May 2023 - August 2023'
                iconStyle = {{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<img src={RBCLogo} alt="RBC's Logo" style={{width: '100%', height: '100%',}}/>}
            >
                <h3 className="vertical-timeline-element-title">RBC: Software Developer Intern</h3>
                <br/>
                <h5 className="vertical-timeline-element-subtitle">Toronto, Ontario, Canada</h5>
                
                <p>&#x2022; Saved RBC approximately $1,200,000 on a monthly basis, and reduced work-time for agents by more than 50%, by
                creating an internal full-stack summary generation tool for collections agents using React.js, Next.js, FastAPI, Python,
                Semantic UI, CSS, JavaScript, and Docker.<br/><br/></p>
                
                <p>&#x2022; Created scripts in Python to extract more than 100 keywords and key metrics about client conversations from Excel file<br/><br/></p>
            
                <p>&#x2022; Used Jest and react testing library to create 50 Unit Tests for summary generation front-end, and achieved a mean test coverage of 92%<br/><br/></p>
            
                <p>&#x2022; Used IBM Cloud Pak for Data, to analyze keywords and key metrics about client conversations from Excel file <br/> <br/></p>
                <p>&#x2022; Presented solution to senior RBC executives and an audience of more than 1,000 RBC employees.<br/><br/></p>
                <p>Technologies: Node.js, React.js, JavaScript, FastAPI, Python, Semantic UI, CSS, Docker, Helios (Azure)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)'}}
                date = 'January 2023 - April 2023'
                iconStyle = {{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<img src={RBCCapitalMarketsLogo} alt="RBC's Logo" style={{width: '80%', height: '50%', marginLeft: '10%', marginTop: '25%'}}/>}
            >
                <h3 className="vertical-timeline-element-title">RBC: Software Developer Intern</h3>
                <br/>
                <h5 className="vertical-timeline-element-subtitle">Toronto, Ontario, Canada</h5>
                <p>&#x2022; Converted stock market data from different formats, for more than 1000 datasets using Python, pandas, and Excel.<br/><br/></p>
                <p>&#x2022; Used Solace in Python as Service Event Broker, to send stock market data between internal Flask app and data manipulation tool.<br/><br/></p>
                <p>&#x2022; Developed GraphQL API in Python, to display financial data from data manipulation tool to React front-end.<br/><br/></p>
                <p>Technologies: Python, GraphQL, Solace, Flask, SQL, Hive</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                date = 'May 2022 - August 2022'
                iconStyle = {{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon = {<img src={IBMLogo} alt="IBM's Logo" style={{width: '90%', height: '60%', marginTop: '20%', marginLeft: '10%'}}/>}            
            >


                <h3 className="vertical-timeline-element-title">IBM: Software Developer Intern</h3>
                <br/>
                <h5 className="vertical-timeline-element-subtitle">Markham, Ontario, Canada</h5>
                <p>&#x2022; Created Datagrid transactional data store for IBM Carbon Design System open-source library, which received more than 500,000 downloads using Node.js, React.js, and Sass.<br/><br/></p>
                <p>&#x2022; Increased Unit Test coverage from 2% to 89% for Datagrid microservice by adding more than 100 Unit Tests using Jest and Node.js.<br/><br/></p>
                <p>&#x2022; Utilized Apollo Client as a state-management tool to fetch data from GraphQL API, and sent data to React app, for IBM Cloud "Projects" application.<br/><br/></p>
                <p>&#x2022; Migrated distributed database application implemented in Redis and CouchDB, from Cloudant to IBM Cloudant, resulting in a 20% reduction in latency<br/><br/></p>
                <p>Technologies: Node.js, React.js, JavaScript, Redis, CouchDB, Jest, CSS, Sass, GraphQL, Apollo Client, IBM Cloud</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                date = 'January 2022 - April 2022'
                iconStyle = {{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon = {<img src={BlackBerryLogo} style={{width: '85%', height: '60%', marginTop: '20%', marginLeft: '8%'}}></img>}
            >

                <h3 className="vertical-timeline-element-title">BlackBerry: Software Developer Intern</h3>
                <br/>
                <h5 className="vertical-timeline-element-subtitle"></h5>
                <p>&#x2022; Developed Restful Web Service in Java using Spring Boot, and created 50 Unit Tests using Selenium.<br/><br/></p>
                <p>&#x2022; Reduced authentication time by 20% for internal developers, by implementing a tool for SAML authentication with third-party applications using Java and Cassandra.<br/><br/></p>
                <p>&#x2022; Reduced latency by 30%, by replacing third-party Web Driver with native Java libraries.<br/><br/></p>
                <p>&#x2022; Developed HTML Parser in Java using JSoup to obtain data for 1000+ registered tenants.<br/><br/></p>
                <p>Technologies: Java, Spring Boot, Selenium WebDriver, Azure, Cassandra, SQL, JSoup, HTML, REST API's</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                date = "September 2021 - December 2021"
                iconStyle = {{background: 'rgb(33, 150, 243', color: '#fff'}}
                icon = {<img src={OpenTextLogo} alt="OpenText's Logo" style={{wdith: '100%', height: '90%', marginLeft: '-27%', marginTop: '5%'}}></img>}
            >
                
                <h3 className="vertical-timeline-element-title">OpenText: Software Developer Intern</h3>
                <br/>
                <h5 className="vertical-timeline-element-subtitle">Waterloo, Ontario, Canada</h5>
                <p>&#x2022; Created full-stack web application using Node.js, Express.js, React, and SQLite to display execution results of more than 10,000 Unit Tests.<br/><br/></p>
                <p>&#x2022; Increased number of successfully executed Unit Tests from 82% to 94%, by manipulating tests using JavaScript and react testing library.<br/><br/></p>
                <p>&#x2022; Designed and developed XML Parser in Java using multi-threading, to streamline the process of executing Unit Tests, resulting in runtime decreasing by 20%.<br/><br/></p>
                <p>&#x2022; Integrated XML Parser with SQLite database to store attributes of XML Unit Tests and execution results.<br/><br/></p>
                <p>Technologies: Node.js, Express.js, React.js, React Testing Library, JavaScript, Postman, SQLite, XML</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                date = "May 2021 - August 2021"
                iconStyle= {{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon = {<img src={AnalyticlyLogo} alt="Analyticly Solutions Logo" style={{width: '70%', height: '80%', marginTop: '8%', marginLeft: '14%'}}></img>}
            >
                <h3 className="vertical-timeline-element-title">Analyticly Solutions: Backend Developer Intern</h3>
                <h5 className="vertical-timeline-element-subtitle">Toronto, Ontario, Canada</h5>
                <p>&#x2022; Developed REST API in Flask and PostgreSQL, to reduce response time from Machine Learning model to web app by 40%.<br/><br/></p>
                <p>&#x2022; Modularized Python code to send asynchronous web requests to Flask app, thus reducing Azure VM costs by 35%.<br/><br/></p>
                <p>&#x2022; Integrated Gmail API, Slack API, and Twilio Message Service API, with Azure data pipeline to send early warning data at time intervals specified by the user.<br/><br/></p>
                <p>&#x2022; Implemented multi-processing for Machine Learning model using Python, resulting in 30% increase in execution speed.<br/><br/></p>
                <p>&#x2022; Converted financial data through different units of time using Python, and satisfied the integrity of 30 Unit Tests, resulting in a 100% conversion accuracy.<br/><br/></p>
                <p>Technologies: Python, Flask, pytest, SQL, PostgreSQL, Tensorflow, Azure, Google Cloud Platform</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element --work"
                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                date = "January 2021 - April 2021"
                iconStyle = {{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon = {<img src={RIIS_LLCLogo} alt="RIIS LLC Logo" style={{width: '100%', height: '70%', marginTop: '12%'}}></img>}
            >
                <h3 className="vertical-timeline-element-title">RIIS LLC: Machine Learning Software Engineer Intern</h3>
                <h5 className="vertical-timeline-element-subtitle">Windsor, Ontario, Canada</h5>
                <p>&#x2022; Used Convolutional Neural Networks to develop Image Recognition algorithm with Tensorflow in Python, to identify cars in a parking lot, resulting in a mean average precision of 89%.<br/><br/></p>
                <p>&#x2022; Annotated more than 16000 sheep images across 700 files using Roboflow to train, validate, and test Image Detection algorithm to find sheep.<br/><br/></p>
                <p>&#x2022; Optimized Image Recognition algorithm for detecting livestock using Tensorflow, resulting in accuracy increasing from 73% to 93%.<br/><br/></p>
                <p>&#x2022; Integrated Java Web Service with MySQL database, and connected Web Service to ETA Detroit android app, to view public transportation times and dates in the Detroit Metropolitan Area.<br/><br/></p>
                <p>Technologies: Python, Tensorflow, Java, SQL, MySQL, Java Web Services, Android, Jupyter Notebook</p>
            </VerticalTimelineElement>

            <VerticalTimeline>

            </VerticalTimeline>
        </VerticalTimeline>
        );


}