import React from 'react';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { education: [], educationObj: {} };
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui text container">
          <h4 className="ui center aligned header">Education Details</h4>
          <div className="ui segments">
            {this.state.education && this.state.education.length ? <div>
              {this.state.education.map((item) => (
                <div>
                  {item.name} {item.study} {item.address}
                </div>
              ))}
            </div> : ''}
            <div className="ui segment">
              <div class="ui input focus">
                <input type="text" placeholder="Name of Institute" onChange={(e) => {
                  let obj = this.state.educationObj
                  obj["name"] = e.target.value
                  this.setState({
                    educationObj: obj
                  })
                }}></input>
              </div>
            </div>
            <div className="ui segment">
              <div class="ui input focus">
                <input type="text" placeholder="What do you study here ?" onChange={(e) => {
                  let obj = this.state.educationObj
                  obj["study"] = e.target.value
                  this.setState({
                    educationObj: obj
                  })
                }}></input>
              </div>
            </div>
            <div className="ui segment">
              <div class="ui textarea focus">
                <textarea type="text" rows={4} cols={50} placeholder="Address of Institute" onChange={(e) => {
                  let obj = this.state.educationObj
                  obj["address"] = e.target.value
                  this.setState({
                    educationObj: obj
                  })
                }}></textarea>
              </div>
            </div>
            <div className="ui segment">
              <button className="ui primary button" onClick={() => {
                let edu = [...this.state.education, this.state.educationObj]
                this.setState({ education: edu, educationObj: {} }, () => this.props.setParentState('education', this.state.education))

              }} >Add</button>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
