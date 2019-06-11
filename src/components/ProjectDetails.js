import React, { useState } from 'react';

const ProjectDetails = ({ setParentState }) => {
  const [projectDetails, setProjectDetails] = useState({})

  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Project Details</h4>
        <div className="ui segments">
          <div className="ui segment">
            <div class="ui input focus">
              <input type="text" placeholder="Enter Project Title" onChange={(e) => {
                projectDetails['title'] = e.target.value
                setProjectDetails(projectDetails)
                setParentState('projectDetails', projectDetails)
              }}></input>
            </div>
          </div>
          <div className="ui segment">
            <div class="ui input focus">
              From <input type="date" placeholder="Select Date" onChange={(e) => {
                projectDetails['fromDate'] = e.target.value
                setProjectDetails(projectDetails)
                setParentState('projectDetails', projectDetails)
              }} /> To <input type="date" placeholder="Select Date" onChange={(e) => {
                projectDetails['toDate'] = e.target.value
                setProjectDetails(projectDetails)
                setParentState('projectDetails', projectDetails)
              }} />
            </div>
          </div>
          <div className="ui segment">
            <div class="ui textarea focus">
              <textarea type="text" rows={4} cols={50} placeholder="Project Description" onChange={(e) => {
                projectDetails['description'] = e.target.value
                setProjectDetails(projectDetails)
                setParentState('projectDetails', projectDetails)
              }}></textarea>
            </div>
          </div>
          <div className="ui segment">
            <div class="ui textarea focus">
              <textarea type="text" rows={4} cols={50} placeholder="Tech Stack" onChange={(e) => {
                projectDetails['techStack'] = e.target.value
                setProjectDetails(projectDetails)
                setParentState('projectDetails', projectDetails)
              }}></textarea>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ProjectDetails 