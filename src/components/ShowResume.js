import React from 'react';
import '../styles/showResume.css';
import { connect } from 'react-redux';
import print from 'print-js';
import { Resume1Style } from '../styles';
import jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
class ShowResume extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    let projectDetails = JSON.parse(localStorage.getItem('projectDetails'));
    let languageDetails = JSON.parse(localStorage.getItem('languageDetails'));
    let hobbies = JSON.parse(localStorage.getItem('hobbies'));
    let personalDetails = JSON.parse(localStorage.getItem('personalDetails'));
    let educationDetails = JSON.parse(localStorage.getItem('educationDetails'));
    let professionalDetails = JSON.parse(
      localStorage.getItem('professionalDetails')
    );
    this.setState({
      data: {
        projectDetails,
        languageDetails,
        hobbies,
        personalDetails,
        educationDetails,
        professionalDetails
      }
    });
  }

  getStars = (dark, outline) => {
    let stars = [];
    let d = dark;
    let o = outline;
    while (d && d > 0) {
      stars.push(<i className="star icon rating_icon"></i>);
      d--;
    }

    while (o && o > 0) {
      stars.push(<i className="star outline icon rating_icon"></i>);
      o--;
    }

    return stars;
  };

  render() {
    // console.log(this.props)
    const {
      projectDetails,
      languageDetails,
      hobbies,
      personalDetails,
      educationDetails,
      professionalDetails
    } = this.state.data;
    return (
      <React.Fragment>
        <div className="ui container">
          <page size="A4" layout="landscape" className="show_resume_main_div">
            <div id="resume">
              <div className="section">
                <div className="profile_name">
                  <h2>
                    {(personalDetails && personalDetails.name) ||
                      'K Siva Kumar'}
                  </h2>
                </div>
                <div className="profile_role">
                  <span>
                    {(personalDetails && personalDetails.role) ||
                      'Full Stack Developer(MERN)'}
                  </span>
                </div>
                <div className="profile_address">
                  <span>
                    {(personalDetails && personalDetails.address) || ''}
                  </span>
                </div>
                <div className="profile_contact">
                  <span>
                    {(personalDetails && personalDetails.email) ||
                      'sivakumarkondala.123@gmail.com'}
                  </span>
                </div>
                <div className="profile_contact">
                  <span>
                    {(personalDetails && personalDetails.mobile) ||
                      '8500992164'}
                  </span>
                </div>
              </div>

              <div className="section content">
                <div className="content_head">SUMMARY</div>
                <div className="content_description">
                  {(personalDetails && personalDetails.summary) ||
                    'I started my career with MERN and Ethereum Dapps. I developed myself into a frontend developer using ReactJS with patterns like Redux. Trying to extract more from reactjs and javascript.'}
                </div>
              </div>
              <div className="hr" />

              <div className="section content">
                <div className="content_head">PROJECTS</div>
                <div className="content_description">
                  {projectDetails &&
                    projectDetails.length &&
                    projectDetails.map((item) => (
                      <div className="project_content">
                        <div className="project_head_section">
                          Github link https://github.com/contactyash of all the
                          projects I have worked on. Check Portfolio and live
                          demo of all projects at
                          https://yashrathore.in/projects
                        </div>
                        <div>
                          <div>{item && item.title}</div>
                          <div>
                            {item && item.from_date} - {item && item.to_date}
                          </div>
                          <div>{item && item.description}</div>
                          <div>Tech Stack:- {item && item.techStack}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="hr" />

              <div className="section content">
                <div className="content_head">Education</div>
                <div className="content_description edu_des">
                  {educationDetails && educationDetails.length
                    ? educationDetails.map((item) => (
                        <div className="education_content">
                          <div className="institute">
                            <div>{item.name}</div>
                            <div>
                              <b>{item.study}</b>
                            </div>
                          </div>
                          <div className="institute_address">
                            {item.address}
                          </div>
                        </div>
                      ))
                    : ''}
                </div>
              </div>
              <div className="hr" />

              <div className="section content">
                <div className="content_head">Professional</div>
                <div className="edu_des">
                  {professionalDetails && professionalDetails.length
                    ? professionalDetails.map((item) => (
                        <div className="professional_content">
                          <div className="content_description">{item.tech}</div>
                          <div className="prof2">
                            {this.getStars(item.rating, 5 - item.rating)}
                          </div>
                        </div>
                      ))
                    : ''}
                </div>
              </div>
              <div className="hr" />

              <div className="section content">
                <div className="content_head hobbies">Hobbies & Interests</div>
                <div className="content_description">
                  <ul>
                    {hobbies && hobbies.length
                      ? hobbies.map((item) => <li>{item.other}</li>)
                      : ''}
                  </ul>
                </div>
              </div>
              <div className="hr" />

              <div className="section content">
                <div className="content_head">Language</div>
                <div className="lang content_description">
                  {languageDetails &&
                    languageDetails.length &&
                    languageDetails.map((item) => (
                      <div className="content">
                        <div className="lang1">{item.lang}</div>
                        <div className="lang2">{item.fluency}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </page>
          <div className="ui text container">
            <button
              class="ui primary button"
              onClick={() => {
                let doc = new jsPDF('p', 'mm', 'a4');
                html2canvas(document.getElementById('resume')).then(
                  (canvas) => {
                    let img = canvas.toDataURL('image/jpeg,2.0');
                    doc.addImage(img, 'JPEG', 0, 0, 211, 208);
                    doc.save('myResume.pdf');
                  }
                );
                // print({
                //   printable: 'resume',
                //   type: 'html',
                //   style: Resume1Style,
                //   scanStyles: false
                // })
              }}
            >
              Save
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect((state) => {
  return state.form;
})(ShowResume);
