import React from 'react';
import '../styles/App.css';
// import PersonalDetails from './PersonalDetails';
// import ProjectDetails from './ProjectDetails';
// import Education from './Education';
// import Professional from './Professional';
import Hobbies from './Hobbies';
// import Languages from './Languages';
// import ShowResume from './ShowResume';
// import { Stepper } from './Stepper';


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <h3 className="ui center aligned header">Resume Builder</h3>
          {/* <PersonalDetails /> */}

          {/* <ProjectDetails /> */}

          {/* <Education /> */}
          {/* <Professional /> */}
          <Hobbies />,

          {/* <Languages /> */}


          {/*<Stepper setLS={() => localStorage.setItem('state', JSON.stringify(this.state))} steps={[<PersonalDetails setParentState={this.setParentState} />,
          <ProjectDetails setParentState={this.setParentState} />,
          <Education setParentState={this.setParentState} />,
          <Professional setParentState={this.setParentState} />,
          <Hobbies setParentState={this.setParentState} />,
          <Languages setParentState={this.setParentState} />, <ShowResume />]} /> */}

        </div>
      </React.Fragment>
    );
  }
}
