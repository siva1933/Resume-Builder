import React from 'react';

export default class Professional extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skill: [], skillObj: {} };
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui text container">
          <h4 className="ui center aligned header">Professional Details</h4>
          <div className="ui segments">
            {this.state.skill && this.state.skill.length ? <div>
              {this.state.skill.map((item) => (
                <div>
                  {item.tech} {item.rating}
                </div>
              ))}
            </div> : ''}
            <div className="ui segment">
              <div class="ui input focus">
                <input type="text" placeholder="Skill" onChange={(e) => {
                  let obj = this.state.skillObj
                  obj["tech"] = e.target.value
                  this.setState({
                    skillObj: obj
                  })
                }}></input>
              </div>
            </div>
            <div className="ui segment">
              <div class="ui input focus">
                <input type="text" placeholder="Rate your skill" onChange={(e) => {
                  let obj = this.state.skillObj
                  obj["rating"] = e.target.value
                  this.setState({
                    skillObj: obj
                  })
                }}></input>
              </div>
            </div>
            <div className="ui segment">
              <button className="ui primary button" onClick={() => {
                let edu = [...this.state.skill, this.state.skillObj]
                this.setState({ skill: edu, skillObj: {} }, () => this.props.setParentState('skill', this.state.skill))

              }} >Add</button>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
