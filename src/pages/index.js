import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Software Engineer by profession. I am good at designing and developing web and mobile applications. 
            Alongside, this I have also done data wrangling, data visualization, and modeling. 
            I also write at The Dev Community and Medium about programming, startups and entrepreneurship. 
            I have got <b>190K+ views on The Dev Community</b> and <b>10K+ views on Medium</b>.
            If you want to discuss something, Just reach out to me at any of my social media handles.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Product Manager</h3>
              <div className="subheading mb-3">Saaya Health</div>
              <p>
                I am part of the core team meeting different stakeholders in the business. I also
                work closely with developers and manage the development lifecycle for the product.
                Alongside, this I also implement features in Frontend and Backend. Managing tasks on Trello and Jira 
                is also part of my responsibilities.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Diya Interactive</div>
              <p>
              My main accomplishments here include :
              <br />
- Led front end development team of our product SaayaHealth using ReactJS
<br />
- Responsible for documentation of releases including bug fixing and features for various products
<br />
- Ported various designs to code using HTML5 and CSS3
<br />
- Worked on Dashboards of various products including features addition and design enhancement
<br />
- Developed wire frames and mock ups for UI of different web and mobile apps
<br />
- Wrote SQL Queries to measure Key Performance Indicators for our product NextU
<br />
- Proposed a framework for implementation of Machine Learning techniques in our products to automate various tasks
<br />
- Wrote test cases for JavaScript code using Jest and automated flows of test using Selenium WebDriver
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Intern Frontend</h3>
              <div className="subheading mb-3">FetchSky International</div>
              <p>
           Main achievements here include :
           <br />
- Designed Blogs section of their website which significantly increased interaction of users and enable company to announce major releases, discounts and strategies there
   <br />
- Integrated Infinite Scroller to their application which improved user experience and enabled them seamlessly scroll down entities
   <br />
- Added Progressive image loading module to the Peekaboo Web application which added progression to image loading improving user experience
   <br />
- Proposed a solution to the company to replace their existing manual chat system with chat bot which enabled them to seamlessly answer common queries of users automatically using API.ai
   <br />
- Did a detailed analysis of their Web application using Lighthouse tool and fixed all the loopholes identified by the tool. It helped in significant reduction of loading times by 20% ,better support for screen readers and made application compatible to the principles of Progressive Web App (PWA)
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017 - Aug 2017</span>
            </div>
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div> */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Karachi</h3>
              <div className="subheading mb-3">Masters of Science (Electronics) </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"><p>January 2018 -Dec 2018</p></span>
            </div>
            
          </div>
        

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
              <div className="subheading mb-3">BSc in Electronics</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2015 - Dec 2017</span>
            </div>
          </div>
           <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
         
        </div>
           <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Data Science with Python Track - <b>DataCamp</b>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Data Science Fundamentals - <b>Cognitive Class</b>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Web Development using MERN stack
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross platform mobile app development using React Native
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Backend development using Django and Flask
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Data cleaning, wrangling and munging using Python
            </li>
             <li>
              <i className="fa-li fa fa-check"></i>
              ML modeling using Python
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a full stack developer, I enjoy most of my time being
            outdoors.
          </p>
          <p className="mb-0">
            When forced indoors, I work on some hobby projects.
            In this time you will find me blogging, working on some datasets, and exploration of the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
       
      </section>
    </div>
  </Layout>
);

export default IndexPage;
