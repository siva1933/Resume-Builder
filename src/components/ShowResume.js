import React from 'react';
import './styles/showResume.css'
import jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';


export default class ShowResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
  }

  componentDidMount() {
    this.setState({
      details: JSON.parse(localStorage.getItem('state'))
    })
  }

  getStars = (dark, outline) => {
    let stars = []
    let d = dark;
    let o = outline
    while (d && d > 0) {
      stars.push(<i className="star icon rating_icon"></i>)
      d--;
    }

    while (o && o > 0) {
      stars.push(<i className="star outline icon rating_icon"></i>)
      o--;
    }

    return stars
  }
  render() {
    const { personalDetials, projectDetails, education, skill, hobbies } = this.state.details
    return (
      <React.Fragment>
        <div className="ui container">
          <page id="resume" size="A4" layout="landscape" className="show_resume_main_div">
            <div>
              <div className="section">
                <div className="profile_name">
                  <h2>
                    {personalDetials && personalDetials.name}
                  </h2>
                </div>
                <div className="profile_role">
                  <span>
                    {personalDetials && personalDetials.role}
                  </span>
                </div>
                <div className="profile_address">
                  <span>
                    {personalDetials && personalDetials.address}
                  </span>
                </div>
                <div className="profile_contact">
                  <span>
                    {personalDetials && personalDetials.email}
                  </span>
                </div>
                <div className="profile_contact">
                  <span>
                    {personalDetials && personalDetials.mobile}
                  </span>
                </div>
              </div>

              <div className="section content">
                <div className="content_head">
                  SUMMARY
            </div>
                <div className="content_description">
                  {personalDetials && personalDetials.summary}

                </div>
              </div>
              <div className="hr" />


              <div className="section content">
                <div className="content_head">
                  PROJECTS
            </div>
                <div className="content_description project_content">
                  <div className="project_head_section">
                    Github link https://github.com/contactyash of all the projects I have worked on.
                    Check Portfolio and live demo of all projects at https://yashrathore.in/projects
             </div>
                  <div>
                    <div>{projectDetails && projectDetails.title}</div>
                    <div>{projectDetails && projectDetails.fromDate} - {projectDetails && projectDetails.toDate}</div>
                    <div>{projectDetails && projectDetails.description}</div>
                    <div>Tech Stack:- {projectDetails && projectDetails.techStack}</div>
                  </div>
                </div>
              </div>
              <div className="hr" />


              <div className="section content">
                <div className="content_head">
                  Education
            </div>
                <div className="content_description edu_des">
                  {education && education.length ? education.map((item) => (<div className="education_content">
                    <div className="institute">
                      <div>{item.name}
                      </div>
                      <div><b>{item.study}</b></div>
                    </div>
                    <div className="institute_address">
                      {item.address}
                    </div></div>
                  )) : ''}
                </div>
              </div>
              <div className="hr" />


              <div className="section content">
                <div className="content_head">
                  Professional
            </div>
                <div className="edu_des">
                  {skill && skill.length ? skill.map((item) => (<div className="professional_content"><div className="content_description">
                    {item.tech}
                  </div>
                    <div className="prof2">
                      {this.getStars(item.rating, 5 - item.rating)}
                    </div></div>)) : ""}
                </div>
              </div>
              <div className="hr" />


              <div className="section content">
                <div className="content_head hobbies">
                  Hobbies & Interests
            </div>
                <div className="content_description">
                  <ul>
                    {hobbies && hobbies.length ? hobbies.map((item) => (<li>{item}</li>)) : ''}
                  </ul>
                </div>
              </div>
              <div className="hr" />


              <div className="section content">
                <div className="content_head">
                  Language
            </div>
                <div className="lang content_description">
                  <div className="content">
                    <div className="lang1">Hindi</div>
                    <div className="lang2">Native</div>
                  </div>
                  <div className="content">
                    <div className="lang1">English</div>
                    <div className="lang2">Proficient</div>
                  </div>
                </div>
              </div>
            </div>
          </page>
          <div className="ui text container">
            <button class="ui primary button" onClick={() => {
              let doc = new jsPDF('p', 'mm', 'a4')
              html2canvas(document.getElementById("resume")).then((canvas) => {
                let img = canvas.toDataURL('image/jpeg,2.0')
                doc.addImage(img, 'JPEG', 0, 0, 211, 208)
                doc.save('myResume.pdf')
              });
            }}>
              Save
            </button>
          </div>


        </div>
      </React.Fragment>
    );
  }
}